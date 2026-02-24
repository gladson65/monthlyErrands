import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import { ToastContainer } from 'react-toastify';
import { useContext } from 'react';
import { Provider } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setAuth, clearAuth } from './store/authSlice';
import { useLocation } from 'react-router-dom';
import store from './store/store';

import './App.css';

function App() {

  // get the url path and disply landing page accordingly
  const location = useLocation();
 
  // const [ userNameApp, setUserName ] = useState("");
  const dispatch = useDispatch();

 
  useEffect(()=> {
    // getting logged user from the local storage
    const user = localStorage.getItem('monthlyUser');
    const token = localStorage.getItem('monthlyToken');
    const email = localStorage.getItem('monthlyEmail');
    const userID = localStorage.getItem('monthlyUserID');

    if (user && token) {
      // And subscribe into setAuth reducer function
      dispatch(setAuth({user: user ? user : null, token: token ? token : null, email: email ? email : null, userID: userID ? userID : null}));
  
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
        {
          location.pathname === '/' &&
          <Landing />

        }
        <Outlet />
      </Provider>
      
      
    </>
  )
}

export default App
