import { Link } from "react-router-dom";
import './SignUp.css';

function SignUp() {

    return (
        <>
            <div id="signUp" className="w-screen h-screen flex justify-center items-start pt-20 gap-12">

                <div className="hidden md:block">
                    {/* https://www.vhv.rs/dpng/d/242-2424386_funny-man-png-9-95017-arabic-teacher-funny.png */}
                    <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2lu8EliWnvD1-P5YL3euiy8ev9g8KsF6MiQ&s"
                    height="200px" width="200px"/>
                </div>
                <div className="form-content h-auto w-96 flex flex-col justify-center gap-6">
                    <h2 className="text-gray-500">
                        INTRODUCE YOURSELF
                    </h2>
                    <h1 className="text-2xl">
                        Hi there! My name is
                    </h1>
                    <input
                        type="text" className="border-2 py-2 px-2 w-full h-10
                        focus:outline-2 outline-cyan-500 focus:border-0 focus:shadow-xl transition-all duration-300 rounded-2xl" required/>
                   
                    <div className="transition-all duration-300 w-full mb-7 flex flex-col justify-center gap-4">
                        <label htmlFor="email" className="text-lg">
                            Here’s my <b>email address</b>:
                        </label>
                        <input
                            id="email" type="email" className="border-2 py-2 px-2 w-full h-10
                            focus:outline-2 outline-cyan-500 focus:border-0 focus:shadow-xl transition-all duration-200 rounded-2xl" required/>
                        
                        <label htmlFor="password" className="text-lg">
                            And here’s my <b>password</b>:
                        </label>
                        <input 
                            id="password" type="password" className="border-2 py-2 px-2 w-full h-10
                            focus:outline-2 outline-cyan-500 focus:border-0 focus:shadow-xl transition-all duration-200 rounded-2xl" required/>
                    </div>
                    
                    

                    <div className="signDiv w-full flex justify-start items-center py-1 gap-7 transition-all duration-200">
                        <button className={`signup-btn py-3 px-2 rounded-lg hover:bg-cyan-500 transition-all duation-150 `}>
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