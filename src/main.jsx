import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { lazy, Suspense } from 'react';


// lazy loading implementation
const SignUp = lazy(()=> import('./components/SignUp.jsx'));
const Login = lazy(()=> import('./components/LogIn.jsx'));


// creating app router
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}/>
  </StrictMode>,
)
