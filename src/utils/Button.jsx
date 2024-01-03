import React, { useState } from "react";
import { FaCircleCheck, FaCircle, FaC } from "react-icons/fa6";
import { IoMdArrowDropleft } from "react-icons/io";
const Button = ({ setselectAll, icon, ...props }) => {



  return (
    <button {...props}>
      {icon}
      <span>{setselectAll ? "SELECTED" : "SECELCT"}</span>
      <button className="innerBtn">
        <IoMdArrowDropleft />
        <span>Click here</span>
      </button>
    </button>
  );
};

export default Button;
