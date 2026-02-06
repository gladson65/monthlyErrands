import { Link,useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from 'react-toastify'
import './SignUp.css';

function SignUp() {

    // state variables
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    // useNavigate for navigation
    const navigate = useNavigate();

    // signUp function
    function signUpFunc(e) {
        e.preventDefault();

        // first validation (user need to input something) 
        if (!name || !email || !password) {
            toast.info("Kindly fill name, email and password");
            return;
        }
        else {
            // after user input
            const post = fetch('http://localhost:7000/api/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({name: name, email: email, password: password})
            })

            // convert fetched data into json data
            const postResult = post.then((data)=> {
                return data.json();
            })


            postResult.then((data)=> {
            
                // if register success then navigate to login 
                if (data.key === 'success') {
                    // success message
                    toast.success(`${data.message}`)
                    // clear the form data
                    document.getElementById("text").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("password").value = "";

                    setTimeout(()=> {
                        navigate('/')
                    }, 5000)
                }
                else if (data.error) {
                    // error message
                    toast.error(`${data.error}`)
                }
                else {
                    // error message
                    toast.error(`${data.message}`)
                }
            })
        }


    }

    useEffect(()=> {

        // cleaning function
        return ()=> {
            setName(prev=> "");
            setEmail(prev=> "");
            setPassword(prev=> "");
        }
    }, [])

    return (
        <>
            <div id="signUp" className="w-[100%] h-screen flex justify-center items-start pt-20 gap-12">

                <div className="hidden md:block">
                    {/* https://www.vhv.rs/dpng/d/242-2424386_funny-man-png-9-95017-arabic-teacher-funny.png */}
                    <img src="https://preview.redd.it/uvibci1kih031.jpg?width=640&crop=smart&auto=webp&s=24aa905ef5dafbdaacee7a24d85414cbc8ab739c"
                    height="200px" width="200px" alt="register-image"/>
                </div>
                <div className="form-content h-auto w-96 flex flex-col justify-center gap-6">
                    <h2 className="text-gray-500">
                        INTRODUCE YOURSELF
                    </h2>
                    <h1 className="text-2xl">
                        Hi there! My name is
                    </h1>
                    <input onChange={(e)=> setName(e.target.value)}
                        id="text" type="text" className="border-2 py-2 px-2 w-full h-10
                        focus:outline-2 outline-cyan-500 focus:border-0 focus:shadow-xl transition-all duration-300 rounded-2xl" required/>
                   
                    <div className="transition-all duration-300 w-full mb-7 flex flex-col justify-center gap-4">
                        <label htmlFor="email" className="text-lg">
                            Here’s my <b>email address</b>:
                        </label>
                        <input onChange={(e)=> setEmail(e.target.value)}
                            id="email" type="email" className="border-2 py-2 px-2 w-full h-10
                            focus:outline-2 outline-cyan-500 focus:border-0 focus:shadow-xl transition-all duration-200 rounded-2xl" required/>
                        
                        <label htmlFor="password" className="text-lg">
                            And here’s my <b>password</b>:
                        </label>
                        <input onChange={(e)=> setPassword(e.target.value)}
                            id="password" type="password" className="border-2 py-2 px-2 w-full h-10
                            focus:outline-2 outline-cyan-500 focus:border-0 focus:shadow-xl transition-all duration-200 rounded-2xl" required/>
                    </div>
                    
                    

                    <div className="signDiv w-full flex justify-center items-center py-1 gap-7 transition-all duration-200">
                        <button onClick={signUpFunc} className={`signup-btn rounded-lg hover:bg-cyan-500 transition-all duation-150 `}>
                            Sign me up!
                        </button>
                        <span>or</span>
                        <button className="googleBtn">
                            Sign up with Google
                        </button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default SignUp;