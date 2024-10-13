import React, { useEffect, useState, useRef } from "react";

const BannerWithFadingGridBackground = () => {
  // Array to create 64 grid items (8x8 grid)
  const gridItems = Array.from({ length: 60 });

  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);

  const textRef = useRef(null);
  const imageRef = useRef(null);

  // IntersectionObserver to observe text and image
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2, // 20% visibility threshold
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === textRef.current) {
          setIsTextVisible(entry.isIntersecting);
        } else if (entry.target === imageRef.current) {
          setIsImageVisible(entry.isIntersecting);
        }
      });
    }, observerOptions);

    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
  }, []);

  return (
    <div className="relative min-h-screen flex md:flex-col md:gap-10 sm:flex-col xs:flex-col justify-center items-center text-start md:text-center p-8">
      {/* Grid Background with Fading Effect */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div
          className="grid md:grid grid-cols-8 grid-rows-8 md:grid-cols-8 md:grid-rows-8 sm:grid-cols-4 sm:grid-rows-4 xs:grid-cols-4 xs:grid-rows-4 w-full h-full gap-0 opacity-10 dark:opacity-10"
          style={{
            maskImage: "linear-gradient(to bottom, black 30%, transparent 70%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 30%, transparent 70%)",
          }}
        >
          {gridItems.map((_, index) => (
            <div
              key={index}
              className="border border-black dark:border-gray-400"
            ></div>
          ))}
        </div>
      </div>

      {/* Banner Content */}
      <div
        ref={textRef}
        className={`relative max-w-3xl md:mt-10 md:mb-0 px-4 md:px-0 transition-transform duration-1000 ease-in-out ${
          isTextVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-20"
        }`}
      >
        <h1 className="text-6xl md:text-6xl sm:text-4xl xs:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
        One Stop  
          <span
            className="relative inline-block"
            style={{
              minWidth: "260px",
              maxWidth: "260px",
              whiteSpace: "nowrap",
            }}
          >
            Solution
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1213 73"
              fill="orange"
            >
              <path d="M1212.41 5.51c3.05 12.87-22.36 11.93-30.26 15.68-94.32 20.51-269.09 32.42-365.48 37.51-77.91 3.82-155.66 9.93-233.67 11.67-57.49 2.56-115.05-.19-172.57 1.58-121.28.91-243.17 1.88-363.69-13.33-12.51-2.64-25.8-2.92-37.77-7.45-30.66-21.42 26.02-21.53 38.52-19.26 359.95 29.05 364.68 27.36 638.24 17.85 121-3.78 241.22-19.21 426.76-41.46 4.72-.65 9.18 3.56 8.45 8.36a941.74 941.74 0 0 0 54.29-9.21c9.33-2.33 18.7-4.56 27.95-7.19a7.59 7.59 0 0 1 9.23 5.24Z"></path>
            </svg>
          </span> 
          for your Factory Digitization
            </h1>
        <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 mb-10">
        Unlock the full potential of your industrial assets with OpsightAI's IIoT Gateway. Our gateway seamlessly connects your machines, sensors, and devices, providing a reliable and flexible platform for real-time data acquisition and processing.
        </p>

        {/* <div className="flex flex-col md:flex-row sm:flex-row xs:flex-row justify-start md:justify-center space-y-4 md:space-y-0 md:space-x-4">
          <button className="bg-gray-800 dark:bg-white text-white dark:text-black py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700">
            Book Demo
          </button>
          <a
            href="/learn-more"
            className="text-gray-800 dark:text-white py-3 px-6"
          >
            Learn more →
          </a>
        </div> */}
      </div>
      <img
        ref={imageRef}
        src="http://placehold.it/1140x600"
        className={`mt-10 md:mt-0 transition-transform duration-1000 ease-in-out ${
          isImageVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-20"
        }`}
        alt="banner-img"
      />
    </div>
  );
};

export default BannerWithFadingGridBackground;