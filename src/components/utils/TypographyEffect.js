import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypographyEffect = ({ children, typespeed }) => {
  return (
    <div className="inline-block">
      <Typewriter
        words={[children]}
        loop={Infinity} // Typing only once
        typeSpeed={typespeed} // Speed for typing
        deleteSpeed={50} // Speed for deleting (if needed)
        delaySpeed={1000} // Delay before typing starts
      />
    </div>
  );
};

export default TypographyEffect;
