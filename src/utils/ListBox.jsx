import React, { useEffect, useState } from "react";
import { FaCircle, FaCircleCheck } from "react-icons/fa6";
import Button from "./Button";
const ListBox = ({ data, setselectAll, ...props }) => {
  const { img, heading, list, smallText, review } = data;

  const [selected, setSelected] = useState(false);
  const [none, setNone] = useState(false);

  function selectFunc() {
    console.log(selected);
    return setSelected(!selected);
  }

  useEffect(() => {
    return setNone((prev) => (setselectAll ? false : true));
  }, [setselectAll]);

  return (
    <div className={`listBox`} {...props}>
      <div className="transparent" onClick={selectFunc}></div>

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
      {!setselectAll ? (
        <Button
        text={`SELECT`}
        icon={<FaCircle />}
          onClick={() => setSelected(!selected)}
          className={`boxButton ${selected ? "none" : ""}`}
        />
      ) : (
        ""
      )}

      {setselectAll &&
        (none ? (
          <Button
          text={`SELECT`}
            onClick={() => setSelected(!selected)}
            className={`boxButton ${selected ? "none" : ""}`}
            icon={<FaCircle />}
          />
        ) : (
          <Button
          text={`SELECTED`}
            onClick={() => {
              setNone(!none);
              setSelected(!selected);
            }}
            className={`boxButton selected ${selected && "none"}`}
            icon={<FaCircleCheck />}
          />
        ))}
      {selected && (
        <Button
        text={`SELECTED`}
          onClick={() => setSelected(!selected)}
          className={`boxButton ${selected ? "selected" : ""}`}
          icon={setselectAll || selected ? <FaCircleCheck /> : <FaCircle />}
        />
      )}
      <p>{smallText}</p>
    </div>
  );
};

export default ListBox;
