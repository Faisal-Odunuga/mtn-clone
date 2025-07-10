import React from "react";

const BtnArrow = ({ arrow, onClick, className }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-10 h-10 flex items-center justify-center bg-mtn rounded-full ${className}`}
    >
      <img src={arrow} alt={arrow} />
    </button>
  );
};

export default BtnArrow;
