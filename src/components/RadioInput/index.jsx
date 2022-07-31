import React from "react";
import "./radio.css";

const RadioInput = ({ value, name }) => {
  return (
    <div>
      <label for={name}>
        <input type="radio" id={name} name={name} value={value} />
        {value}
      </label>
      <br />
    </div>
  );
};

export default RadioInput;
