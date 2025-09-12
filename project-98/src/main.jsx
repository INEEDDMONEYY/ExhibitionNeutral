import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBroswerRouter} from "react-router";
import {RouterProvider} from 'react-dom';
import './index.css'
import App from './App.jsx'
import Home from './pages/homePage.jsx'

const router = createBroswerRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'home',
    element: <Home />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
