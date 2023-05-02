import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Component/Home/Home';
import Blog from './Component/Blog/Blog';
import Login from './Component/Login/Login';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children: [
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: "/blog",
        element:<Blog></Blog>
      },
      {
        path: "/login",
        element:<Login></Login>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
