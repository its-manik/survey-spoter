import React, { useState } from "react";
import { FaCircleCheck, FaCircle } from "react-icons/fa6";
import { IoMdArrowDropleft } from "react-icons/io";
const ListBox = ({ data }) => {
  const { img, heading, list, smallText, review } = data;

  const [selected, setselected] = useState(false);
  const obj = {
    img: "img",
    heading: "Share your opinion with YouGov and get rewarded",
    list: [
      " You can get your opinion featured in the news!",
      "Answer surveys for cash rewards",
      " Join millions of others in sharing your opinion on politics, sport, entertainment and more",
    ],
    smallText:
      "By clicking Select, you consent to YouGov sending you emails about their survey panel service. You can unsubscribe at any time. Read their Privacy Policy to find out more.",
  };
  return (
    <div className="listBox">
      <button
        className={`boxButton ${selected ? "selected" : ""}`}
        onClick={() => {
          setselected(!selected);
        }}
      >
        {!selected ? <FaCircle /> : <FaCircleCheck />} <span>SELECT</span>
        <button className="innerBtn">
          <IoMdArrowDropleft /> Click here
        </button>
      </button>
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
          <ul>
            {list.map((item, index) => (
              <li key={index}>
                <FaCircleCheck />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p>{smallText}</p>
    </div>
  );
};

export default ListBox;
