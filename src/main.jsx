import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Componant/Root/Root';
import Home from './Componant/Home/Home';
import Donation from './Componant/Donation/Donation';
import Statistics from './Componant/Statistics/Statistics';
import DonationDetails from './Componant/DonationDetails/DonationDetails';
import { MyProvider } from './Context/MyProvider';
import { HelmetProvider } from 'react-helmet-async';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/donationDetails/:id',
        element: <DonationDetails></DonationDetails>
      },
      {
        path: '/donation',
        element: <Donation></Donation>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </MyProvider>
  </React.StrictMode>,
)
