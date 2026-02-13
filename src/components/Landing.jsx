import { Link } from 'react-router-dom';
import './Landing.css';


function Landing() {

    return (
        <>
            <div id='landingDiv' className='flex justify-center items-start'>
                <div className='landing-text flex flex-col justify-start items-center gap-7'>
                    <h1 className='text-4xl'>Welcome to Spend Wisely</h1>
                    <h2 className='text-2xl'>To Analysis your spend.</h2>
                    <Link to={"form"}>
                        <button>Start Tracking</button>
                    </Link>
                </div>
                <div className='landingImgDiv'>
                    <img src='landingImage.png' width="400px" height="400px" alt='landing-image'/>
                </div>
            </div>
        </>
    )
}

export default Landing;