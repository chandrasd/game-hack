import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Leaderboard from './Leaderboard';
import './input.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/leaderboard",
    element: <Leaderboard />,
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


