import React, { useEffect, useState } from "react";
import ThemeToggle from "../ThemeToggle";
import DropdownMenu from "../dropdown/DropdownMenu";
import DropdownMenuProducts from "../dropdown/DropDownProducts";
import DarkLogo from "../../assets/Logo/DarkLogo.png";
import LightLogo from "../../assets/Logo/LightLogo.png";
import { LoginOutlined, MenuOutlined } from "@ant-design/icons";
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
import DropdownMenuServices from "../dropdown/DropDownService";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isScrolled, setIsScrolled] = useState(false);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpenProduct, setDropdownProduct] = useState(false);
  const [dropdownOpenServices, setDropdownServices] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Toggle Sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50  p-4 flex justify-between items-center  transition duration-500 ${
        isScrolled
          ? "bg-gray-100 dark:bg-gray-800 shadow-md"
          : "bg-white dark:bg-transparent"
      }`}
    >
      <div className="flex items-center ">
        <div className="mr-6">
          <div className="mr-6">
            <NavLink to="/">
              <img
                src={theme === "dark" ? DarkLogo : LightLogo} // Switch logos based on theme
                alt={theme === "dark" ? "DarkLogo" : "LightLogo"}
                className="h-14 w-auto"
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
                ? "relative text-md font-medium p-1 text-black dark:text-white marker-underline active"
                : "relative text-md font-medium p-1 text-gray-700 dark:text-gray-300 marker-underline hover:text-gray-600 dark:hover:text-indigo-400"
            }
          >
            <HomeOutlined /> Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "relative text-md font-medium p-1 text-gray-900 dark:text-white marker-underline active"
                : "relative text-md font-medium p-1 text-black dark:text-white marker-underline hover:text-gray-500 dark:hover:text-indigo-400"
            }
          >
            <ExclamationCircleOutlined /> About Us
          </NavLink>
          <div
            className="relative text-md font-medium p-1 text-black dark:text-white hover:text-gray-500 dark:hover:text-indigo-400"
            onMouseEnter={() => setDropdownProduct(true)}
            onMouseLeave={() => setDropdownProduct(false)}
          >
            <DotChartOutlined />{" "}
            <span style={{ cursor: "pointer" }}>Products</span>
            {dropdownOpenProduct && <DropdownMenuProducts />}
          </div>

          <div
            className="relative text-md font-medium p-1 text-black dark:text-white hover:text-gray-500 dark:hover:text-indigo-400"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <DotChartOutlined />{" "}
            <span style={{ cursor: "pointer" }}>Solutions</span>
            {dropdownOpen && <DropdownMenu />}
          </div>
          <div
            className="relative text-md font-medium p-1 text-black dark:text-white hover:text-gray-500 dark:hover:text-indigo-400"
            onMouseEnter={() => setDropdownServices(true)}
            onMouseLeave={() => setDropdownServices(false)}
          >
            <ControlOutlined />{" "}
            <span style={{ cursor: "pointer" }}>Services</span>
            {dropdownOpenServices && <DropdownMenuServices />}
          </div>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              isActive
                ? "relative text-md p-1 font-medium text-gray-900 dark:text-white marker-underline active"
                : "relative text-md p-1 font-medium text-black dark:text-white marker-underline hover:text-gray-500 dark:hover:text-indigo-400"
            }
          >
            <PhoneOutlined /> Contact
          </NavLink>
        </div>
      </div>
      <div className="flex items-center space-x-4 md:space-x-4 sm:space-x-3 xs:space-x-2">
        <div
          className="md:hidden xs:flex p-2 rounded-md bg-transparent hover:text-gray-500 dark:hover:text-gray-300 text-black dark:text-white transition duration-500"
          onClick={toggleSidebar}
        >
          <MenuOutlined />
        </div>
        <ThemeToggle onThemeChange={handleThemeChange} />
          {/* <img
            src="https://via.placeholder.com/150"
            alt="User Avatar"
            className="h-5 w-5 rounded-full"
          /> */}
        <button className="flex items-center justify-center p-3 md:p-5 md:py-2 sm:p-2 xs:p-2 md:ml-0 bg-gray-800 hover:bg-gray-600 dark:hover:bg-gray-900 dark:bg-gray-700 text-white rounded-lg">
          <span className="md:text-xs sm:text-xs xs:text-xs xs:flex xs:items-center xs:justify-center">Login <LoginOutlined style={{marginLeft:'5px'}}/></span> 
        </button>
      </div>

      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
    </nav>
  );
};

export default Navbar;
