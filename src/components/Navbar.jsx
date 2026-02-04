import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

    return (

        <>
            <header className="w-dvw h-20 bg-red-400">
                <nav className="w-full h-full bg-red-500">
                    <div id="logo" className='w-full text-center'>
                        <h1 className='font-bold'>
                            Monthly Errands
                        </h1>
                    </div>
                    <div id="navigation" className='w-full'>
                        <Link to={"register"}>Sign Up</Link>
                    </div>
                </nav>
            </header>
        </>

    )
}

export default Navbar;