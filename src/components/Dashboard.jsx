import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import DashboardItem from './DashboardItem';
import './Dashboard.css';
import { Link } from 'react-router-dom';

function Dashboard() {

    // store expenses
    const [ expenseData, setExpenseData ] = useState([]);

    // get user ID and token from the redux state
    const userID = useSelector((store)=> store.auth.userID);
    const token = useSelector((store)=> store.auth.authToken);


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
            // storing expense results in a state variable
            setExpenseData(prev=> expenses.expenses);
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
                       expenseData.length > 0 ? 
                    
                       expenseData.map((expense)=> {
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