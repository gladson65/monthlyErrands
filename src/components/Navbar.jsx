import { Link } from 'react-router-dom';
import './Navbar.css';
import { useState, useEffect } from 'react';

function Navbar() {

    // state variables
    const [ showName, setShowName ] = useState("");


    useEffect(()=> {
        // taking data from the local storage
        const token = localStorage.getItem("monthlyToken");
        if (token.split(" ")[0] === 'JWT') {
            // get the login user
            const userName = localStorage.getItem("monthlyUser");
            // store inside state variable
            setShowName(prev=> userName);
        }
    }, [])

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
                            showName ?
                            <>
                                <Link to={"login"} className='bg-zinc-600 text-yellow-300'>{showName}</Link>
                            </>
                            :
                            <>
                                <Link to={"register"} className='bg-red-400'>Sign Up</Link>
                            </>
                        }

                    </div>
                </nav>
            </header>
        </>

    )
}

export default Navbar;