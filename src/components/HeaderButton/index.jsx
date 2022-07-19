import "./HeaderButton.css";
import { Link } from "react-router-dom";
const HeaderButton = ({ header, button, color, attr, link }) => {
  let styles = {
    border: `2px solid ${color} `,
    color: `${color} `,
  };

  return (
    <div className="header__button__cont">
      <h1 style={{ color: color }}> {header} </h1>
      <Link to={link}>
        <button className={attr} style={styles}>
          {button}
        </button>
      </Link>
    </div>
  );
};

export default HeaderButton;
