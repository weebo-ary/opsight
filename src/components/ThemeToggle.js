import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";

const ThemeToggle = ({ onThemeChange }) => {
  // Default to 'dark' if there is no theme in localStorage
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "dark";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // localStorage.setItem("theme", theme); // Save the theme in localStorage

    // Notify parent component of the theme change, if any
    if (onThemeChange) {
      onThemeChange(theme);
    }
  }, [theme, onThemeChange]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md bg-transparent hover:text-gray-500 dark:hover:text-gray-300 text-black dark:text-white transition duration-500"
    >
      {theme === "dark" ? (
        <SunOutlined style={{ fontSize: "24px" }} />
      ) : (
        <MoonOutlined style={{ fontSize: "24px" }} />
      )}
    </button>
  );
};

export default ThemeToggle;
