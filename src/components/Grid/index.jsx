import React from "react";
import "./grid.css";

const Grid = () => {
  return (
    <div className="fields__cont">
      <h1>Work Fields</h1>
      <div className="Grid__container">
        <div className="left">
          <div>1</div>
          <div>2</div>
        </div>
        <div className="right">
          <div>3</div>
          <div>4</div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
