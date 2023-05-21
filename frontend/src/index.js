import React from 'react';
import ReactDOM from 'react-dom/client';import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
// import App from './App';
import Profile from './components/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
