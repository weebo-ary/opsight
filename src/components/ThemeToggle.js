import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';

const ThemeToggle = ({ onThemeChange }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
    if (onThemeChange) {
      onThemeChange(theme); // Notify parent component of theme change
    }
  }, [theme, onThemeChange]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md bg-transparent hover:text-gray-500 dark:hover:text-gray-300 text-black dark:text-white transition duration-500"
    >
      {theme === 'dark' ? <SunOutlined style={{ fontSize: '16px' }} /> : <MoonOutlined style={{ fontSize: '16px' }}/>}
    </button>
  );
};

export default ThemeToggle;