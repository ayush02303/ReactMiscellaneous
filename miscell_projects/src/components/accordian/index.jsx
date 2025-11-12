import React, { useState } from "react";
import data from "./data";

const Accordian = () => {
  const [selected, setSelected] = useState(null);

  const handlesingleSelection = ( currId)=>{
    console.log(currId)

  }
  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataitem) => (
            <div className="item">
              <div onClick={ () => handlesingleSelection(dataitem.id) } className="title">
              <h3>{dataitem.question}</h3>
              <span>+</span>
              </div>
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
