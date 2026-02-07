import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate, useOutletContext } from 'react-router-dom';
import './Login.css';

function LogOut() {

    // for navigation
    const navigate = useNavigate();

    // destructuring outlet context
    const [setUserName] = useOutletContext();

    // to store setTimeOut
    let setTime;

    // function for logout
    function logOutFunc(e) {
        e.preventDefault();
        // notify the user
        toast.success("Logout successfull. please wait a while...")
        // remove user data from the local storage
        localStorage.removeItem("monthlyEmail");
        localStorage.removeItem("monthlyToken");
        localStorage.removeItem("monthlyUser");
        // passing user.name to outlet context
        setUserName(prev=> "")

        setTime = setTimeout(()=> {
            navigate("/");
        }, 3000);
    }


    useEffect(()=> {

        // cleaning function
        return ()=> {
            clearInterval(setTime)
        }
    }, [])

    return (
        <>
            <div id='logoutDiv' className='flex justify-center gap-5'>
                <h1 className='text-xl'>Do you want to log out?</h1>
                <button onClick={logOutFunc}>Log Out</button>
            </div>
        </>
    )
}

export default LogOut;