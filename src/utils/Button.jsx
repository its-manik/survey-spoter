import React, { useState } from "react";
import { FaCircleCheck, FaCircle } from "react-icons/fa6";
import { IoMdArrowDropleft } from "react-icons/io";
const Button = ({ setselectAll, setselected, icon, selected, ...props }) => {
  const [setSelect, setsetSelected] = useState(false);

  return (
    <button {...props}>
      {icon}

      {setselectAll || selected ? (
        <span>SELECTED</span>
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
