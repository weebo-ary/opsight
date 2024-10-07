// src/Routes/MainRoutes.js
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../pages/main/home";
import Services from "../pages/main/services";
import AboutUs from "../pages/main/about";
import Contact from "../pages/main/contact";
import Support from "../pages/extra-pages/support";
import NotFound from "../pages/maintenance/404";
import TrainingIndustry40 from "../pages/extra-pages/training";
import Consultancy from "../pages/extra-pages/consultancy";
import EdgeGateway from "../pages/products/edge-gateway";
import Platform from "../pages/products/platform";
import CncMoitoring from "../pages/monitoring/CncMonitoring";
import RobotMonitoring from "../pages/monitoring/RobotMonitoring";
import EnergyMonitoring from "../pages/monitoring/EnergyMonitoring";

// Define your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/", element: <Home /> }],
  },

  {
    path: "/",
    element: <App />,
    children: [{ path: "/about", element: <AboutUs /> }],
  },

  {
    path: "/",
    element: <App />,
    children: [{ path: "/services", element: <Services /> }],
  },

  {
    path: "/",
    element: <App />,
    children: [{ path: "/contact-us", element: <Contact /> }],
  },

  {
    path: "/",
    element: <App />,
    children: [{ path: "/support", element: <Support /> }],
  },

  {
    path: "/",
    element: <App />,
    children: [{ path: "/training", element: <TrainingIndustry40 /> }],
  },

  {
    path: "/",
    element: <App />,
    children: [{ path: "/consultancy", element: <Consultancy /> }],
  },

  {
    path: "/",
    element: <App />,
    children: [{ path: "/iiot-gateway", element: <EdgeGateway /> }],
  },

  {
    path: "/",
    element: <App />,
    children: [{ path: "/platform", element: <Platform /> }],
  },
  {
    path: "/",
    element: <App />,
    children: [{ path: "/cnc-monitoring", element: <CncMoitoring /> }],
  },
  {
    path: "/",
    element: <App />,
    children: [{ path: "/robot-monitoring", element: <RobotMonitoring /> }],
  },
  {
    path: "/",
    element: <App />,
    children: [{ path: "/energy-monitoring", element: <EnergyMonitoring /> }],
  },

  {
    path: "/",
    element: <App />,
    children: [{ path: "*", element: <NotFound /> }],
  },
]);

const MainRoutes = () => {
  return <RouterProvider router={router} />;
};

export default MainRoutes;
