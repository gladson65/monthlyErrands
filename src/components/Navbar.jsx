import { Link } from 'react-router-dom'

function Navbar() {

    return (

        <>
            <header className="w-dvw h-20 bg-red-400 p-4">
                <nav className="w-full h-full bg-red-500">
                    <div id="logo">
                        <h1>Monthly Errands</h1>
                    </div>
                    <div id="navigation">
                        <Link to={"register"}>Sign Up</Link>
                    </div>
                </nav>
            </header>
        </>

    )
}

export default Navbar;