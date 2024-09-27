// src/Navbar.js
import React, { useState } from "react";
import ThemeToggle from "../ThemeToggle";
import DropdownMenu from '../dropdown/DropdownMenu';
import DarkLogo from "../../assets/Logo/DarkLogo.png";
import LightLogo from "../../assets/Logo/LightLogo.png";
import { NotificationOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import "./nav.css"

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-800 p-4 flex justify-between items-center transition duration-500">
      <div className="flex items-center">
        <div className="mr-6">
          <div className="mr-6">
            <img
              src={theme === "dark" ? DarkLogo : LightLogo} // Switch logos based on theme
              alt={theme === "dark" ? "DarkLogo" : "LightLogo"}
              className="h-10 w-auto"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center ">
        <div className="flex space-x-9">
        <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? 'relative text-lg font-medium text-gray-900 dark:text-white marker-underline active'
                : 'relative text-lg font-medium text-gray-700 dark:text-gray-300 marker-underline hover:text-gray-600 dark:hover:text-indigo-400'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'relative text-lg font-medium text-gray-900 dark:text-white marker-underline active'
                : 'relative text-lg font-medium text-gray-700 dark:text-gray-300 marker-underline hover:text-gray-500 dark:hover:text-indigo-400'
            }
          >
            About Us
          </NavLink>
          <div
            className="relative text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-indigo-400"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span style={{cursor:"pointer"}}>Solutions</span>
            {dropdownOpen && <DropdownMenu />}
          </div>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? 'relative text-lg font-medium text-gray-900 dark:text-white marker-underline active'
                : 'relative text-lg font-medium text-gray-700 dark:text-gray-300 marker-underline hover:text-gray-500 dark:hover:text-indigo-400'
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              isActive
                ? 'relative text-lg font-medium text-gray-900 dark:text-white marker-underline active'
                : 'relative text-lg font-medium text-gray-700 dark:text-gray-300 marker-underline hover:text-gray-500 dark:hover:text-indigo-400'
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <ThemeToggle onThemeChange={handleThemeChange} />
        <img
          src="https://via.placeholder.com/150"
          alt="User Avatar"
          className="h-8 w-8 rounded-full"
        />
      </div>
    </nav>
  );
};

export default Navbar;