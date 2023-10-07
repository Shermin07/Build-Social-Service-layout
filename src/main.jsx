import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

import AuthProvider from './Provider/AuthProvider';

import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import PrivateRoute from './PrivateRoute';

import AboutUs from './Pages/AboutUs/AboutUs';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: () => fetch('/data.json')
      },
      {
        path:'/aboutUs',
        element:<AboutUs></AboutUs>,
        loader: () => fetch('/data.json')
      },

      {
      path: '/serviceA/:id',
      element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
      loader: () => fetch('/data.json')
     
      },

      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
