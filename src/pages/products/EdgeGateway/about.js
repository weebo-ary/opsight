import { CodeSandboxOutlined, MessageOutlined, PartitionOutlined } from "@ant-design/icons";
import React from "react";

function About() {
  return (
    <div className="relative h-auto flex flex-col justify-center items-center text-start md:text-start p-8 ">
      <div className="text-center md:text-center sm:text-start xs:text-start mb-10">
        <h2 className="text-6xl md:text-6xl sm:text-4xl xs:text-4xl p-8">Designed And Developed By {" "}

        <span
            className="relative inline-block"
          >
            OpsightAI
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1213 73" fill="orange"><path d="M1212.41 5.51c3.05 12.87-22.36 11.93-30.26 15.68-94.32 20.51-269.09 32.42-365.48 37.51-77.91 3.82-155.66 9.93-233.67 11.67-57.49 2.56-115.05-.19-172.57 1.58-121.28.91-243.17 1.88-363.69-13.33-12.51-2.64-25.8-2.92-37.77-7.45-30.66-21.42 26.02-21.53 38.52-19.26 359.95 29.05 364.68 27.36 638.24 17.85 121-3.78 241.22-19.21 426.76-41.46 4.72-.65 9.18 3.56 8.45 8.36a941.74 941.74 0 0 0 54.29-9.21c9.33-2.33 18.7-4.56 27.95-7.19a7.59 7.59 0 0 1 9.23 5.24Z"></path></svg>
          </span>

        </h2>
        <p className="text-2xl md:text-2xl sm:text-xl xs:text-xl p-8">A gateway device that industry leaders trust.</p>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 max-w-6xl gap-10">
        <div className="bg-grey-300 w-full shadow-lg dark:shadow-2xl h-auto p-8 rounded-lg transition cursor-pointer hover:scale-105 duration-30">
          <PartitionOutlined style={{fontSize:"4rem", marginBottom:"1rem"}}/>
          <h2 className="text-2xl font-semibold text-start mb-4">Design</h2>
          <h2 className="text-xl text-gray-500 dark:text-gray-300 text-start">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry that cannot be predicted as a valid medium for any particular
          </h2>
        </div>
        <div className="bg-grey-300 w-full shadow-lg dark:shadow-2xl h-auto p-8 rounded-lg transition cursor-pointer hover:scale-105 duration-30">
          <CodeSandboxOutlined style={{fontSize:"4rem", marginBottom:"1rem"}}/>
          <h2 className="text-2xl font-semibold text-start mb-4">Manufacturing</h2>
          <h2 className="text-xl text-gray-500 dark:text-gray-300 text-start">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry that cannot be predicted as a valid medium for any particular
          </h2>
        </div>
        <div className="bg-grey-300 w-full shadow-lg dark:shadow-2xl h-auto p-8 rounded-lg transition cursor-pointer hover:scale-105 duration-30">
          <MessageOutlined style={{fontSize:"4rem", marginBottom:"1rem"}}/>
          <h2 className="text-2xl font-semibold text-start mb-4">Support</h2>
          <h2 className="text-xl text-gray-500 dark:text-gray-300 text-start">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry that cannot be predicted as a valid medium for any particular
          </h2>
        </div>
      </div>
    </div>
  );
}

export default About;
