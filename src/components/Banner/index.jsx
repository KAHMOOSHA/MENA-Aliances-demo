import React from "react";
import "./banner.css";

const Banner = () => {
  return (
    <div className="main__banner">
      <div className="banner__overlay">
        <div className="banner__text">
          <h1>
            Hire the best Employee and team for your project, startup, and
            company.
          </h1>
          <p>
            You can choose the best option for you, and it does not matter
            whether you are in Prague or San Francisco. We will provide you with
            all the feature to work with the employee remotly
          </p>
          <button>HIRE NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
