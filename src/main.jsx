import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Pages/Home/Home/Home';
import Recipe from './Pages/Recipe/Recipe';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: "/recipe/:id",
        element:<Recipe></Recipe>,
        loader:({params}) =>
        fetch(`http://localhost:5000/cards/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='px-20'>
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
