import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Signup from './components/pages/signup.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1 style={{ color: 'red' }}>Don't suck</h1>,
    children: [
      {
        index: true,
        element: <h1>Need a default page</h1>
      }, {
        path: '/aboutus',
        element:<></>
      }, {
        path: '/login',
        element:<></>
      }, {
        path: '/signup',
        element: <Signup/>
      }, {
        path: '/signup/client',
        element:<></>
      }, {
        path: '/signup/supplier',
        element:<></>
      }, {
        path: '/donate',
        element:<></>
      }, {
        path: '/checkout',
        element:<></>
      }, {
        path: '/browse',
        element:<></>
      }, {
        path: '/products',
        element:<></>
      }, {
        path: '/cart/:userId',
        element:<></>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
