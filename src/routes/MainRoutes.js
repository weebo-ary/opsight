// src/Routes/MainRoutes.js
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import Home from '../pages/main/home';
import Services from '../pages/main/services';
import AboutUs from '../pages/main/about';
import Contact from '../pages/main/contact';
import Support from '../pages/extra-pages/support';
import NotFound from '../pages/maintenance/404';

// Define your routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
    ],
  },

  {
    path: '/',
    element: <App />,
    children: [
      { path: '/about', element: <AboutUs /> },
    ],
  },

  {
    path: '/',
    element: <App />,
    children: [
      { path: '/services', element: <Services /> },
    ],
  },

  {
    path: '/',
    element: <App />,
    children: [
      { path: '/contact-us', element: <Contact /> },
    ],
  },

  {
    path: '/',
    element: <App />,
    children: [
      { path: '/support', element: <Support /> },
    ],
  },

  {
    path: '/',
    element: <App />,
    children: [
      { path: '*', element: <NotFound /> },
    ],
  },
]);

const MainRoutes = () => {
  return <RouterProvider router={router} />;
};

export default MainRoutes;
