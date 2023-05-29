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
import Error from './Error/Error';
import Blog from './Pages/Blog/Blog';
import Login from './Login/Login';
import Registration from './Registration/Registration';
import AuthProvider from './Providers/AuthProvider';
import PrivateRoute from './Routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Error></Error>,
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
        path: "/recipe/:id",
        element:<PrivateRoute><Recipe></Recipe></PrivateRoute>,
        loader:({params}) =>
        fetch(`http://localhost:5000/cards/${params.id}`)
      },
      {
        path: "/login",
        element:<Login></Login>
      },
      {
        path: "/registration",
        element:<Registration></Registration>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <div className='px-20'>
    <RouterProvider router={router} />
    </div>
    </AuthProvider>
  </React.StrictMode>,
)
