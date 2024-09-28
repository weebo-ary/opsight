import {
  ArrowRightOutlined,
  BookOutlined,
  ExpandAltOutlined,
  KeyOutlined,
  ProjectOutlined,
  SnippetsOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Popup from "../popup";

const DropdownMenu = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  return (
    <div className="md:absolute xs:relative md:border-t-0 xs:border-t top-full md:w-150 xs:w-72 bg-white dark:bg-gray-800 shadow-xl rounded-lg p-4 z-10 md:flex">
      <div className="md:w-1/3 xs:w-1/2 md:border-r border-gray-100 dark:border-gray-700 pr-4">
        <Link
          to="/library"
          className="flex md:w-36 xs:w-48 text-sm items-center px-2 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
        >
          <BookOutlined className="text-xs mr-3" /> Library
        </Link>
        <Link
          to="/documentation"
          className="flex md:w-36 xs:w-48 text-sm items-center px-2 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
        >
          <SnippetsOutlined className="text-xs mr-3" /> Documentation
        </Link>
        <Link
          to="/academy"
          className="flex md:w-36 xs:w-48 text-sm items-center px-2 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
        >
          <ExpandAltOutlined className="text-xs mr-3" /> Expansion
        </Link>
        <Link
          to="/portal"
          className="flex md:w-36 xs:w-48 text-sm items-center px-2 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
        >
          <ProjectOutlined className="text-xs mr-3" /> Central Portal
        </Link>
        <Link
          to="/youtube-channel"
          className="flex md:w-36 items-center text-sm xs:w-48 px-2 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
        >
          <YoutubeOutlined className="text-xs mr-3" /> Media Gallery
        </Link>
        <br/>
      </div>

      <div className="md:w-128 sm:w-72 md:pl-5">
        <h3 className="font-semibold text-sm text-gray-700 dark:text-gray-300 mb-4">
          Customer Stories
        </h3>
        <p className="text-gray-400 text-xs dark:text-gray-300 mb-4">
          Explore how Opsight AI is utilized by our customers.
        </p>
        <h3 className="font-semibold text-sm text-gray-700 dark:text-gray-300 mb-0 xs:hidden md:flex">
          <KeyOutlined style={{marginRight:"4px", fontSize:"16px"}}/> Key Features
        </h3>
        <div className="md:hidden">
          <button
            onClick={togglePopup}
            className="flex bg-slate-300 w-1/2 items-center px-2 py-3 text-gray-700 dark:text-black hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
          >
            <span style={{ marginTop: "-5px" }}>By Industry</span>
            <ArrowRightOutlined
              style={{ fontSize: "10px", marginLeft: "10px" }}
            />
          </button>
        </div>

        {/* Popup component */}
        <Popup isOpen={isPopupOpen} togglePopup={togglePopup} />
        <h3 className="xs:hidden font-medium text-gray-700 dark:text-gray-300">
          By Industry
        </h3>
        <div className="md:grid xs:hidden grid-cols-2 gap-4">
          <div>
            <div className="mt-3 space-y-2">
              <Link
                to="/library"
                className="flex text-sm items-center px-1 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
              >
                <BookOutlined className="text-xs mr-3" /> Library
              </Link>
              <Link
                to="/documentation"
                className="flex text-sm items-center px-1 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
              >
                <SnippetsOutlined className="text-xs mr-3" /> Documentation
              </Link>
              <Link
                to="/academy"
                className="flex text-sm items-center px-1 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
              >
                <ExpandAltOutlined className="text-xs mr-3" /> Expansion
              </Link>
              <Link
                to="/portal"
                className="flex text-sm items-center px-1 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
              >
                <ProjectOutlined className="text-xs mr-3" /> Central Portal
              </Link>
              <Link
                to="/youtube-channel"
                className="flex text-sm items-center px-1 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
              >
                <YoutubeOutlined className="text-xs mr-3" /> Media Gallery
              </Link>
            </div>
          </div>

          <div className="mt-3 space-y-2 ">
            <Link
              to="/library"
              className="flex text-sm items-center px-1 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            >
              <BookOutlined className="text-xs mr-3" /> Library
            </Link>
            <Link
              to="/documentation"
              className="flex text-sm items-center px-1 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            >
              <SnippetsOutlined className="text-xs mr-3" /> Documentation
            </Link>
            <Link
              to="/academy"
              className="flex text-sm items-center px-1 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            >
              <ExpandAltOutlined className="text-xs mr-3" /> Expansion
            </Link>
            <Link
              to="/portal"
              className="flex text-sm items-center px-1 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            >
              <ProjectOutlined className="text-xs mr-3" /> Central Portal
            </Link>
            <Link
              to="/youtube-channel"
              className="flex text-sm items-center px-1 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            >
              <YoutubeOutlined className="text-xs mr-3" /> Media Gallery
            </Link>
          </div>
        </div>
        <br />
        <div className="border-b xs:hidden"></div>

        <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg md:flex xs:hidden items-center">
          <img
            src="https://via.placeholder.com/80"
            alt="Example"
            className="h-20 w-20 rounded-md mr-4"
          />
          <div>
            <span className="bg-green-100 text-md dark:bg-green-800 text-green-700 dark:text-green-300 px-2 py-1 rounded-full text-sm">
              Industrial DataOps
            </span>
            <h5 className="font-medium text-md text-gray-700 dark:text-gray-300 mt-2">
              Three Tips for Going from Legacy to Mainstream
            </h5>
            <p className="text-gray-600  dark:text-gray-400 text-sm">
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
