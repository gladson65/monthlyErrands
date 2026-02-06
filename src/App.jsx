import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ToastContainer position="bottom-right" autoClose={5000}/>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
