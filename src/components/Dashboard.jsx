import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import DashboardItem from './DashboardItem';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import { sortExpense } from '../store/authSlice.js';

function Dashboard() {

    // store expenses
    const [ expenseData, setExpenseData ] = useState([]);

    // for dispatch action
    const dispatch = useDispatch();

    // get user ID and token from the redux state
    const userID = useSelector((store)=> store.auth.userID);
    const token = useSelector((store)=> store.auth.authToken);
    const sortedExpenses = useSelector((store)=> store.auth.sortedExpense);


    useEffect(()=> {
        if (!userID || !token) return;
        // hit a get request
        const expenses = fetch(`http://localhost:7000/api/getExpenses/${userID}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `JWT ${token}`
            }
            
        })

        const expenseResult = expenses.then((expense)=> {
            return expense.json();
        })

        expenseResult.then((expenses)=> {
            // check session has expired or not
            if (expenses.error === 'jwt expired') {
                return toast.error("You session has been expired. Please log in!")
            }
            else {
                // storing expense results in a state variable
                // setExpenseData(prev=> expenses.expenses);
                // storing expense result in redux state
                dispatch(sortExpense(expenses));
            }
        })
        
        
    }, [])

    return (
        <>
            <div id="dashboard">
                <h1>
                    Your Expenses 
                    <Link to="/"> ← Home </Link>
                </h1>

                <div id='expenseDiv'>
                    {  
                       sortedExpenses?.length > 0 ? 
                    
                       sortedExpenses.map((expense)=> {
                        return <DashboardItem key={expense._id} data={expense}/>
                       })
                       :    
                       <>
                        <p>No expenses</p>
                       </>
                    }
                </div>

            </div>
        </>
    )
}

export default Dashboard;