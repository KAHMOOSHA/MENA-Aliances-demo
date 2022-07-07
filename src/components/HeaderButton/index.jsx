import React, { useState } from "react";
import "./HeaderButton.css";
const HeaderButton = ({ header, button, color, attr }) => {
  const [hover, setHover] = useState(false);

  let styles = {
    border: `2px solid ${color}`,
    color: color,
  };

  // const change = () =>{
  //   styles = {
  //       ...styles,
  //       backgroundColor: "black"
  //   }
  // }
  return (
    <div
      // onMouseOver={() => change()}
      className="header__button__cont"
    >
      <h1 style={{ color: color }}> {header} </h1>
      <button className={attr} style={styles}>
        {button}
      </button>
    </div>
  );
};

export default HeaderButton;
