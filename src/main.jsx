import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BeakerIcon } from "@heroicons/react/24/solid";
import { Toaster } from "react-hot-toast";
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Jobs from './components/Jobs/Jobs';
import ErrorPage from './components/ErrorPage/ErrorPage';
import FeaturedJobDetails from './components/FeaturedJobDetails/FeaturedJobDetails';
import jobsLoader from './loaders/jobsLoader';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "applied-jobs",
        element: <Jobs></Jobs>,
        loader: jobsLoader
      },
      {
        path: "detail/:id",
        element: <FeaturedJobDetails></FeaturedJobDetails>,
        loader: async ({ params }) => {
          const res = await fetch(
            "https://raw.githubusercontent.com/imoncoc/fake-data/main/jobs.json"
          );
          const data = await res.json();
          const singleData = data?.find((data) => data.id === params.id);
          return singleData;
        },
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster></Toaster>
    <RouterProvider router={router} />
  </React.StrictMode>
);
