// src/components/Popup.js
import React from 'react';
import {
    BookOutlined,
    ExpandAltOutlined,
    KeyOutlined,
    ProjectOutlined,
    SnippetsOutlined,
    YoutubeOutlined,
  } from "@ant-design/icons";
import { Link } from 'react-router-dom';

const Popup = ({ isOpen, togglePopup }) => {
  if (!isOpen) return null; 

  return (
    <div
      className="fixed inset-0 z-50 w-100 flex flex-col items-center justify-center bg-black bg-opacity-50"
      onClick={togglePopup}
    >
      <div
        className="relative bg-white dark:bg-gray-800 w-11/12 max-w-md p-6 rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the popup
      >
       
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200">
            <KeyOutlined /> Key Features
            <button
          className="relative left-10 text-gray-700 dark:text-gray-300"
          onClick={togglePopup}
        >
          ✕
        </button>
        </h3>
          <div className="mt-3 space-y-2">
            <Link
              to="/library"
              className="flex items-center px-2 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            >
              <BookOutlined className="text-2xl mr-3" /> Library
            </Link>
            <Link
              to="/documentation"
              className="flex items-center px-2 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            >
              <SnippetsOutlined className="text-2xl mr-3" /> Documentation
            </Link>
            <Link
              to="/academy"
              className="flex items-center px-2 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            >
              <ExpandAltOutlined className="text-2xl mr-3" /> Expansion
            </Link>
            <Link
              to="/portal"
              className="flex items-center px-2 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            >
              <ProjectOutlined className="text-2xl mr-3" /> Central Portal
            </Link>
            <Link
              to="/youtube-channel"
              className="flex items-center px-2 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            >
              <YoutubeOutlined className="text-2xl mr-3" /> Media Gallery
            </Link>
          </div>
          <br/>
          <div className='border-b'></div>
          <div className="mt-6 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg md:flex xs:flex-col items-center">
          <img
            src="https://via.placeholder.com/80"
            alt="Example"
            className="h-20 w-20 rounded-md mr-4 mb-2"
          />
          <div>
            <span className="bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-300 px-2 py-1 rounded-full text-sm">
              Industrial DataOps
            </span>
            <h5 className="font-medium text-gray-700 dark:text-gray-300 mt-2">
              Three Tips for Going from Legacy to Mainstream
            </h5>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Wondering whether the legacy systems of record can be augmented to
              meet the demands of modern business?
            </p>
          </div>
      </div>
        </div>
    </div>
  );
};

export default Popup;
