import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BeakerIcon } from "@heroicons/react/24/solid";
import { Toaster } from "react-hot-toast";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="text-2xl underline text-gray-800 font-sans">
        Hello world!
        <BeakerIcon className="h-6 w-6 text-blue-500" />
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster></Toaster>
    <RouterProvider router={router} />
  </React.StrictMode>
);
