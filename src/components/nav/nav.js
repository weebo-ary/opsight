// src/Navbar.js
import React, { useState } from "react";
import ThemeToggle from "../ThemeToggle";
import DropdownMenu from "../dropdown/DropdownMenu";
import DarkLogo from "../../assets/Logo/DarkLogo.png";
import LightLogo from "../../assets/Logo/LightLogo.png";
import { MenuOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import "./nav.css";
import Sidebar from "../Drawer/Sidebar";

import {
  ControlOutlined,
  DotChartOutlined,
  ExclamationCircleOutlined,
  HomeOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Toggle Sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 p-4 flex justify-between items-center transition duration-500">
      <div className="flex items-center">
        <div className="mr-6">
          <div className="mr-6">
            <NavLink to="/">
              <img
                src={theme === "dark" ? DarkLogo : LightLogo} // Switch logos based on theme
                alt={theme === "dark" ? "DarkLogo" : "LightLogo"}
                className="h-10 w-auto"
              />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="flex items-center ">
        <div className="md:flex space-x-9 xs:hidden">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "relative text-sm font-medium p-1 text-gray-900 dark:text-white marker-underline active"
                : "relative text-sm font-medium p-1 text-gray-700 dark:text-gray-300 marker-underline hover:text-gray-600 dark:hover:text-indigo-400"
            }
          >
            <HomeOutlined /> Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "relative text-sm font-medium p-1 text-gray-900 dark:text-white marker-underline active"
                : "relative text-sm font-medium p-1 text-gray-700 dark:text-gray-300 marker-underline hover:text-gray-500 dark:hover:text-indigo-400"
            }
          >
            <ExclamationCircleOutlined /> About Us
          </NavLink>
          <div
            className="relative text-sm font-medium p-1 text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-indigo-400"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <DotChartOutlined /> <span style={{ cursor: "pointer" }}>Solutions</span>
            {dropdownOpen && <DropdownMenu />}
          </div>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "relative text-sm font-medium p-1 text-gray-900 dark:text-white marker-underline active"
                : "relative text-sm font-medium p-1 text-gray-700 dark:text-gray-300 marker-underline hover:text-gray-500 dark:hover:text-indigo-400"
            }
          >
           <ControlOutlined /> Services
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              isActive
                ? "relative text-sm p-1 font-medium text-gray-900 dark:text-white marker-underline active"
                : "relative text-sm p-1 font-medium text-gray-700 dark:text-gray-300 marker-underline hover:text-gray-500 dark:hover:text-indigo-400"
            }
          >
           <PhoneOutlined /> Contact
          </NavLink>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div
          className="md:hidden xs:flex p-2 rounded-md bg-transparent hover:text-gray-500 dark:hover:text-gray-300 text-black dark:text-white transition duration-500"
          onClick={toggleSidebar}
        >
          <MenuOutlined />
        </div>
        <ThemeToggle onThemeChange={handleThemeChange} />
        <img
          src="https://via.placeholder.com/150"
          alt="User Avatar"
          className="h-5 w-5 rounded-full"
        />
      </div>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
    </nav>
  );
};

export default Navbar;
