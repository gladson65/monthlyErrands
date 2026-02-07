import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify';
import { useContext } from 'react';
import userContext from './utils/userContext';
import './App.css';

function App() {

  const [ userNameApp, setUserName ] = useState("");

  useEffect(()=> {
    
  }, [userNameApp])

  return (
    <>
      <ToastContainer position="bottom-right" autoClose={5000}/>
      
        <Navbar userNameApp={userNameApp}/>
        <Outlet context={[setUserName]}/>
      
      
    </>
  )
}

export default App
