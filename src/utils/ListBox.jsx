import React, { useState } from "react";
import { FaCircle, FaCircleCheck } from "react-icons/fa6";
import Button from "./Button";
const ListBox = ({ data, setselectAll, ...props }) => {
  const { img, heading, list, smallText, review } = data;

  console.log(setselectAll);

  const [selected, setSelected] = useState(false);
  return (
    <div className={`listBox`} {...props}>
      <Button
        className={`boxButton ${setselectAll ? "selected" : ""}`}
        onClick={(e) => {
          if (e.target.classList.contains("selected")) {
            e.target.classList.remove("selected");
            return setSelected(false)
          } else {
            e.target.classList.add("selected");
            return setSelected(true)
          }
        }}
        selected={selected}
        setselectAll={setselectAll}
        icon={setselectAll || selected ?<FaCircleCheck /> : <FaCircle />}
      />
      <div className="listFlex">
        <div className="listImg">
          <img src={img} alt="" />
          {review && (
            <div className="review">
              <p>Rated Excellent on Trustpilot</p>
              <img src={review} alt="" />
            </div>
          )}
        </div>
        <div className="listContent">
          <h2>{heading}</h2>
          <div className="ul">
            {list.map((item, index) => (
              <div key={index}>
                <div>
                  {" "}
                  <FaCircleCheck />
                </div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p>{smallText}</p>
    </div>
  );
};

export default ListBox;
