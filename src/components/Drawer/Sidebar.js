// src/components/Sidebar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  ControlOutlined,
  DotChartOutlined,
  ExclamationCircleOutlined,
  ExpandAltOutlined,
  HomeOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import DropdownMenu from '../dropdown/DropdownMenu';

const Sidebar = ({ isOpen, toggleSidebar }) => {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div
      className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-20 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={toggleSidebar}
    >
      <div
        className={`fixed top-0 left-0 w-72 bg-white dark:bg-gray-800 h-full shadow-lg z-30 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b-2 dark:bg-gray-700">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Opsight AI</h2>
          <button
            onClick={toggleSidebar}
            className="text-gray-800 dark:text-gray-200 focus:outline-none"
          >
            ✕
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="mt-4">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? 'block py-2 px-4 text-lg font-medium text-indigo-600 dark:text-indigo-400'
                : 'block py-2 px-4 text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
            }
            onClick={toggleSidebar}
          >
            <HomeOutlined /> Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'block py-2 px-4 text-lg font-medium text-indigo-600 dark:text-indigo-400'
                : 'block py-2 px-4 text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
            }
            onClick={toggleSidebar}
          >
            <ExclamationCircleOutlined /> About Us
          </NavLink>
          {/* Solutions Dropdown */}
          <div className="relative">
            <div
              className="flex justify-between items-center cursor-pointer py-2 px-4 text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span><DotChartOutlined /> Solutions</span>
              <ExpandAltOutlined />
            </div>
            {dropdownOpen && <DropdownMenu />}
          </div>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? 'block py-2 px-4 text-lg font-medium text-indigo-600 dark:text-indigo-400'
                : 'block py-2 px-4 text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
            }
            onClick={toggleSidebar}
          >
            <ControlOutlined /> Services
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              isActive
                ? 'block py-2 px-4 text-lg font-medium text-indigo-600 dark:text-indigo-400'
                : 'block py-2 px-4 text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
            }
            onClick={toggleSidebar}
          >
            <PhoneOutlined /> Contact
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
