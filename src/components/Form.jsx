import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import './Form.css';



function Form() {

    // state variables
    const [ spendOn, setSpendOn ] = useState("");
    const [ money, setMoney ] = useState(0);

    // get token from the redux 
    let token = useSelector((store)=> store.auth.authToken);
    // get email from the redux
    let email = useSelector((store)=> store.auth.authEmail);
    // get userID from the redux
    let userID = useSelector((store)=> store.auth.userID)

    // function for storing expenses
    function saveExpense(e) {
        e.preventDefault();
        if (!spendOn || !money || !email) return toast.info("Fill Items, Amount and Email");
        if (isNaN(Number(money))) return toast.info("Amount should be Number");

        // convert spendOn string into an array
        const spendOnArray = spendOn.split(",").map((item)=> item.trim());

        // create a POST request
        const postExpense = fetch('http://localhost:7000/api/storeExpense', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `JWT ${token}`
            },
            body: JSON.stringify({spendOn: spendOnArray, money: Number(money), email: email, userID: userID})
        })

        const postExpenseResult = postExpense.then((expense)=> {
            return expense.json();
        })  
        
        postExpenseResult.then((expenseData)=> {
            if (expenseData.key !== "success" || expenseData.error) return toast.error(`${expenseData.error === 'jwt expired' ? 'Session timeout, log in again' : 'Something went wrong'}`);
            if (expenseData.key === "success") {
                toast.success(`${expenseData.message}`);
                document.getElementById("form").reset();
                setSpendOn(prev=> "");
                setMoney(prev=> 0);
            }
        })

    }

    useEffect(()=> {
        
    }, []);

    return (
        <>
            <div id="spenseDiv">
                <form id='form'>
                    <label htmlFor="spenses" className="text-lg">
                        <b>Items</b>:
                    </label>
                    <input onChange={(e)=> setSpendOn(e.target.value)} id='spenses' type="text" placeholder='Items comma separated' className="border-2 w-full h-10
                        focus:outline-2 outline-cyan-500 focus:border-0 focus:shadow-xl transition-all duration-200 rounded-2xl" required/>
                    
                    <label htmlFor="amount" className="text-lg">
                        <b>Amount</b>:
                    </label>
                    <input onChange={(e)=> setMoney(e.target.value)} id='amount' type='currency' placeholder='Total Amount' className="border-2 w-full h-10
                        focus:outline-2 outline-cyan-500 focus:border-0 focus:shadow-xl transition-all duration-200 rounded-2xl" required/>

                </form>
                <div onClick={saveExpense} id='buttonDiv'>
                    <button>Save It</button>
                </div>
            </div>
        </>
    )
}

export default Form;