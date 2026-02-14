import { Link } from 'react-router-dom';
import './Landing.css';
import { useEffect, useState } from 'react';


function Landing({token}) {

    // state variable for conditional button rendering
    const [tokenToPass, setToken] = useState("");

    useEffect(()=> {
         const token = localStorage.getItem('monthlyToken');
         if (token) {
            setToken(prev=> token);
         }
    }, [])

    return (
        <>
            <div id='landingDiv' className='flex justify-center items-start'>
                <div className='landing-text flex flex-col justify-start items-center gap-7'>
                    <h1 className='text-4xl'>Welcome to Spend Wisely</h1>
                    <h2 className='text-2xl'>To Analysis your spend.</h2>
                    {
                        tokenToPass ?
                        <>
                            <Link to={"form"}>
                                <button>Start Tracking</button>
                            </Link>
                        </>
                        :
                        <>
                            <Link to={"login"}>
                                <button>Login to track expense</button>
                            </Link>
                        </>
                        
                    }
                    
                </div>
                <div className='landingImgDiv'>
                    <img src='landingImage.png' width="400px" height="400px" alt='landing-image'/>
                </div>
            </div>
        </>
    )
}

export default Landing;