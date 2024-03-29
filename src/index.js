import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { createBrowserRouter,  RouterProvider } from 'react-router-dom';
import Ecommerce from './pages/ecommerce/Ecommerce';
import App from './App';



const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
  },
  
  {
    path:'/ecommerce',
    element: <Ecommerce/>,
    
  },
 
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
