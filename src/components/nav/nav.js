// src/Navbar.js
import React, { useState } from "react";
import ThemeToggle from "../ThemeToggle";
import DropdownMenu from '../dropdown/DropdownMenu';
import DarkLogo from "../../assets/Logo/DarkLogo.png";
import LightLogo from "../../assets/Logo/LightLogo.png";
import { NotificationOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

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
              className="h-8 w-auto"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center ">
        <div className="flex space-x-9">
        <Link
            to="/"
            className="text-black dark:text-white font-medium text-lg hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-500 dark:text-gray-300 text-lg hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            About Us
          </Link>
          {/* Dropdown Link */}
          <div
            className="relative text-gray-500 dark:text-gray-300 text-lg hover:text-indigo-600 dark:hover:text-indigo-400"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span style={{cursor:"pointer"}}>Solutions</span>
            {dropdownOpen && <DropdownMenu />}
          </div>
          <Link
            to="/services"
            className="text-gray-500 dark:text-gray-300 text-lg hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Services
          </Link>
          <Link
            to="/contact-us"
            className="text-gray-500 dark:text-gray-300 text-lg hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative p-2 rounded-md bg-transparent text-black dark:text-white">
          <NotificationOutlined style={{ fontSize: "24px" }} />
        </button>
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