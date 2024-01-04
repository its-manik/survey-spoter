import React, { useState } from "react";
import { FaCircleCheck, FaCircle } from "react-icons/fa6";
import { IoMdArrowDropleft } from "react-icons/io";
const Button = ({ text, icon, ...props }) => {
  return (
    <button {...props}>
      {icon}

      {text === "SELECTED" ? (
        <>
          <span>SELECTED</span>
        </>
      ) : (
        <>
          <span>SELECT</span>
          <button className="innerBtn">
            <IoMdArrowDropleft />
            <span>Click here</span>
          </button>
        </>
      )}
    </button>
  );
};

export default Button;
