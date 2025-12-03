import React, { useState } from "react";
import data from "./data";
import "./index.css";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handlesingleSelection = (currId) => {
    console.log(currId);
    setSelected(currId);
  };
  const handleMultipleSelection = (currId) => {};
  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable multi selection{" "}
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataitem) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultipleSelection(dataitem.id)
                    : () => handlesingleSelection(dataitem.id)
                }
                className="title"
              >
                <h3>{dataitem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataitem.id ? (
                <div className="content"> {dataitem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
