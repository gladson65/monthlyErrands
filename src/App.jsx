import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify';
import { useContext } from 'react';
import { Provider } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setAuth, clearAuth } from './store/authSlice';
import store from './store/store';

import './App.css';

function App() {

  // const [ userNameApp, setUserName ] = useState("");
  const dispatch = useDispatch();
 
  useEffect(()=> {
    // getting logged user from the local storage
    const user = localStorage.getItem('monthlyUser');
    const token = localStorage.getItem('monthlyToken');

    if (user && token) {
      // And subscribe into setAuth reducer function
      dispatch(setAuth({user: user ? user: null, token: token ? token:null}));
    }

    if (!user || !token) {  
      dispatch(clearAuth());
    }
   
  }, [])

  return (
    <>
      <ToastContainer position="bottom-right" autoClose={5000}/>
      <Provider store={store}>
        <Navbar />
        <Outlet />
      </Provider>
      
      
    </>
  )
}

export default App
