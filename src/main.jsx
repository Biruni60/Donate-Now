import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './assets/Components/Root/Root';
import Home from './assets/Components/Home/Home';
import Donation from './assets/Components/Donation/Donation';
import Statistics from './assets/Components/Statistics/Statistics';
import DonationDetail from './assets/Components/DonationDetail/DonationDetail';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/donation",
        element:<Donation></Donation>,
        loader:()=>fetch("/donation.json")
      },
      {
        path:"/statistics",
        element:<Statistics></Statistics>
      },
      {
        path:"/home/:id",
        element:<DonationDetail></DonationDetail>,
        loader:()=>fetch("/donation.json")
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
