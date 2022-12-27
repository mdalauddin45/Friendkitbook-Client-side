import React from "react";

const PrimaryButton = ({ children, classes, handler }) => {
  return (
    <button
      onClick={handler}
      className={` text-white bg-[#5596e6]  text-gary-300 ${classes}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
