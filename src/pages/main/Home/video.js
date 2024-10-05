import { PlayCircleOutlined } from "@ant-design/icons";
import React, { useState } from "react";

const VideoSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handlePlayClick = () => {
    setIsVideoOpen(true);
  };

  const handleCloseVideo = () => {
    setIsVideoOpen(false);
  };

  return (
    <div className="relative flex md:flex-row xs:flex-col sm:flex-col justify-between items-center p-8">
      {/* Left Side with Image and Play Button */}
      <div className="relative">
        <img
          src="http://placehold.it/800x600"
          alt="Play Video"
          className="rounded-lg w-full h-auto "
        />
        {/* Play button overlay */}
        <button
  className="absolute inset-0 flex justify-center items-center text-6xl text-gray-800"
  onClick={handlePlayClick}
>
  <div className="relative">
    {/* Pulsing background */}
    <span className="absolute inset-0 bg-gray-700 opacity-75 rounded-full animate-ping"></span>
    
    {/* Static icon */}
    <span className="relative z-10 ">
      <PlayCircleOutlined />
    </span>
  </div>
</button>

      </div>

      {/* Right Side Content */}
      <div className="ml-10">
        <h2 className="text-5xl font-bold">
        Put Your Ideas to Work with OpsightAI
        </h2>
        <div className="mt-10">
          <div className="flex items-start mb-10">
            <div className="mr-4 text-gray-500 text-2xl">🎖️</div>
            <div>
              <h3 className="text-xl font-semibold">
                Lorem Ipsum is simply dummy text of the printing. 
              </h3>
              <p>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry that cannot be predicted
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mr-4 text-gray-500 text-2xl">💼</div>
            <div>
            <h3 className="text-xl font-semibold">
                Lorem Ipsum is simply dummy text of the printing. 
              </h3>
              <p>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry that cannot be predicted
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative w-full max-w-4xl">
            {/* Close Button */}
            
            <div className="relative pb-[56.25%] h-0 overflow-hidden">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/LEqVmOi1fgg"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
                title="Video"
              ></iframe>
            </div>
          </div>
          <div>
              <button
                className="absolute top-10 right-40 text-white text-6xl"
                onClick={handleCloseVideo}
              >
                &times;
              </button>
            </div>
        </div>
      )}
    </div>
  );
};

export default VideoSection;
