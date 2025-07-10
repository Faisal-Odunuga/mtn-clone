import React from "react";

const ButtonOutline = ({ text, className }) => {
  return (
    <button
      className={`text-sm flex items-center justify-center text-specialBlack uppercase bg-transparent border-[2px] border-specialBlack rounded-full py-[1rem] px-[2.5rem] transition-all duration-300 ease-in-out hover:bg-btnGradient hover:border-hover ${className}`}
    >
      {text}
    </button>
  );
};

export default ButtonOutline;
