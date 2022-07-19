import "./HeaderButton.css";
const HeaderButton = ({ header, button, color, attr }) => {
  let styles = {
    border: `2px solid ${color} `,
    color: `${color} `,
  };

  return (
    <div className="header__button__cont">
      <h1 style={{ color: color }}> {header} </h1>
      <button className={attr} style={styles}>
        {button}
      </button>
    </div>
  );
};

export default HeaderButton;
