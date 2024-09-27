import {
  BookOutlined,
  ExpandAltOutlined,
  ProjectOutlined,
  SnippetsOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";

const DropdownMenu = () => {
  return (
    <div className="absolute top-full left-0 w-160 bg-white dark:bg-gray-800 shadow-xl rounded-lg p-6 z-10 flex">
      {/* Left Side Links */}
      <div className="w-1/3 border-r border-gray-200 dark:border-gray-700 pr-4">
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

      {/* Right Side Content */}
      <div className="w-128 pl-6">
        <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-4">
          Customer Stories
        </h4>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Explore how Opsight AI is utilized by our customers.
        </p>
        <p className="font-medium text-gray-700 dark:text-gray-300">
              By Industry
            </p>
        <div className="grid grid-cols-2 gap-4">
            
          <div>
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
          </div>
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
        </div>

        {/* Bottom Section with Image */}
        <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center">
          <img
            src="https://via.placeholder.com/80" // Replace with the actual image URL
            alt="Example"
            className="h-16 w-16 rounded-md mr-4"
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

export default DropdownMenu;
