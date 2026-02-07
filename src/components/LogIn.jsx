import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './Login.css';


function Login() {

    // state variables
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    // useNavigate for navigation
    const navigate = useNavigate();


    // login function
    function loginFunc(e) {
        e.preventDefault();

        // first validation
        if (!email || !password) {
            toast.info("Kindly fill email and password");
            return;
        }
        else {
            // create post request
            const logUser = fetch('http://localhost:7000/api/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({email: email, password: password})
            })

            // convert into json data
            const logResult = logUser.then((data)=> {
                return data.json();
            })

            logResult.then((user)=> {
                // if login successful
                if (user.key === 'success') {

                    // success message
                    toast.success(`${user.message}`)

                    // store user info in localStorage
                    localStorage.setItem('monthlyUser', `${user.name}`);
                    localStorage.setItem('monthlyEmail', `${user.email}`);
                    localStorage.setItem('monthlyToken', `JWT ${user.token}`);
                    
                    // clear the form data
                    document.getElementById("email").value = "";
                    document.getElementById("password").value = "";

                    // navigate to the home page
                    setTimeout(()=> {
                        navigate('/')
                    }, 5000)
                    
                    return;
                }
                else if (user.error) {
                    // error message
                    toast.error(`${user.error}`)
                }
                else {
                    // error message
                    toast.error(`${user.message}`)
                    return;
                }
            })
        }
    }

    useEffect(()=> {
    
        // cleaning function
        return ()=> {
            setEmail(prev=> "");
            setPassword(prev=> "");
        }

    }, [])

    return (
        <>
            <div id="login" className="w-[100%] h-screen flex justify-center items-start gap-12">

                <div className="hidden md:block">
                    {/* https://www.vhv.rs/dpng/d/242-2424386_funny-man-png-9-95017-arabic-teacher-funny.png */}
                    <img src="https://preview.redd.it/uvibci1kih031.jpg?width=640&crop=smart&auto=webp&s=24aa905ef5dafbdaacee7a24d85414cbc8ab739c"
                    height="200px" width="200px" alt="register-image"/>
                </div>
                <div className="form-content h-auto w-96 flex flex-col justify-center items-center gap-6">
                    <div className="transition-all duration-300 w-full mb-7 flex flex-col justify-center items-center gap-4">
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
                    
                    

                    <div className="loginDiv w-full flex justify-center items-center gap-7 transition-all duration-200">
                        <button onClick={loginFunc} className={`login-btn rounded-lg hover:bg-cyan-500 transition-all duation-150 `}>
                            Log In
                        </button>
                        {/* <span>or</span>
                        <button className="googleBtn">
                            Sign up with Google
                        </button> */}
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Login;