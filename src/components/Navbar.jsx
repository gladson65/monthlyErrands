import { Link } from 'react-router-dom';
import './Navbar.css';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Navbar() {

    // state variables
    const [ showName, setShowName ] = useState("");

    // for redux store
    const uSer = useSelector((state)=> state.auth.authUser);
    
    useEffect(()=> {
        console.log("from navbar")
        console.log("from redux", uSer);
        // taking data from the local storage
        const token = localStorage.getItem("monthlyToken");
        if (!token) return;
        if (token.split(" ")[0] === 'JWT') {
            // get the login user
            const userName = localStorage.getItem("monthlyUser");
            // store inside state variable
            setShowName(prev=> userName);
        }
    }, []);

    return (

        <>
            <header className="w-dvw h-20 bg-sky-200">
                <nav className="w-full h-full bg-blue-300">
                    <div id="logo" className='w-full text-center'>
                        <h1 className='font-bold'>
                            Monthly Errands
                        </h1>
                    </div>
                    <div id="navigation" className='w-full'>
                        
                        {
                            uSer ?
                            <>
                                <div className='flex justify-center items-center gap-7'>
                                    <Link to={"dashboard"} className='bg-yellow-200 text-blue-900'>Dashboard</Link>
                                    <Link to={"logout"} className='bg-zinc-600 text-yellow-300'>{uSer}</Link>
                                </div>
                            </>
                            :
                            <>
                                <Link to={"register"} className='bg-red-400'>Register Yourself</Link>
                            </>
                        }

                    </div>
                </nav>
            </header>
        </>

    )
}

export default Navbar;