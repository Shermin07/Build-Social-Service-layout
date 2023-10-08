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
import ContactUs from './Pages/ContactUs/ContactUs';
import Error from './Error/Error';
import Jobs from './Pages/Jobs/Jobs';




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
        element:<PrivateRoute><AboutUs></AboutUs></PrivateRoute>,
        loader: () => fetch('/data.json')
      },
      
      {
        path:'/contactUs',
        element: <ContactUs></ContactUs>
      },
      {
        path:'/jobs',
        element: <PrivateRoute><Jobs></Jobs></PrivateRoute>
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
      },
      {
        path:'*',
        element:<Error></Error>
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
