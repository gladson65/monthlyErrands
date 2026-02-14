import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store.js';
import './index.css';
import App from './App.jsx';
import { lazy, Suspense } from 'react';


// lazy loading implementation
const SignUp = lazy(()=> import('./components/SignUp.jsx'));
const Login = lazy(()=> import('./components/LogIn.jsx'));
const LogOut = lazy(()=> import('./components/Logout.jsx'));
const Form = lazy(()=> import('./components/Form.jsx'));
const Dashboard = lazy(()=> import('./components/Dashboard.jsx'));


// creating app router
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
    children: [
      {
        path: "register",
        element: (
          <Suspense fallback="Loding...">
            <SignUp />
          </Suspense>
        )
      },
      {
        path: "login",
        element: (
          <Suspense fallback="Loding...">
            <Login />
          </Suspense>
        )
      },
      {
        path: "logout",
        element: (
          <Suspense fallback="Loding...">
            <LogOut />
          </Suspense>
        )
      },
      {
        path: "form",
        element: (
          <Suspense fallback="Loding...">
            <Form />
          </Suspense>
        )
      },
      {
        path: "dashboard",
        element: (
          <Suspense fallback="Loding...">
            <Dashboard />
          </Suspense>
        )
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}/>
  </StrictMode>,
)
