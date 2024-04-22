import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import LandingPage from './components/LandingPage/landingpage.jsx'
import Signup from './components/Signup/signup.jsx';
import Browse from './components/Browse/browse.jsx';
import Login from './components/Login/login.jsx';
import AboutUs from './components/AboutUS/aboutus.jsx';
import Client from './components/Signup/client.jsx';
import Supplier from './components/Signup/supplier.jsx';
import Cart from './components/Cart/cart.jsx'
import Success from '../pages/success.jsx'
import Account from '../pages/account.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1 style={{ color: 'red' }}>Don't suck - Stephen prolly</h1>,
    children: [
      {
        index: true,
        element: <LandingPage />
      }, {
        path: 'aboutus',
        element:<AboutUs />
      }, {
        path: 'login',
        element:<Login/>
      }, {
        path: 'signup',
        element: <Signup/>
      }, {
        path: 'signup/client',
        element:<Client/>
      }, {
        path: 'signup/supplier',
        element:<Supplier />
      }, {
        path: 'donate',
        element:<LandingPage/>
      }, {
        path: 'account',
        element: <Account />
      }, {
        path: 'browse',
        element:<Browse />
      }, {
        path: 'products',
        element:<></>
      }, {
        path: 'cart',
        element:<Cart />
      }, {
        path: 'success',
        element:<Success/>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
