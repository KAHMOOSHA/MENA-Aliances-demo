import React from "react";
import "./grid.css";
import HeaderButton from "../HeaderButton";
import { Link } from "react-router-dom";

const Grid = () => {
  return (
    <div className="fields__cont">
      <h1>Work Fields</h1>
      <div className="Grid__container">
        <div className="left">
          <div className="left__first">
            <div className="overlay">
              <HeaderButton
                header="MOBILE DEVELOPMENT"
                button="EXPLORE THE FREELANCER"
                link="/developers"
              />
            </div>
          </div>
          <div className="left__second">
            <div className="gradiant">
              <HeaderButton
                header="PROJECT MANEGMENT"
                button="EXPLORE THE FREELANCER"
                color="black"
                attr="button__black"
                link="/developers"
              />
            </div>
            <div className="white__bored">
              <div className="overlay"></div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="right__first">
            <div className="overlay">
              <HeaderButton
                header="MOBILE DEVELOPMENT"
                button="EXPLORE THE FREELANCER"
                link="/developers"
              />
            </div>
          </div>
          <div className="right__second">
            <div className="overlay">
              <Link to="/work-fields">
                <HeaderButton button="SEE ALL FIELDS" link="/developers" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
