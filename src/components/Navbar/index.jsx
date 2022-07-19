import React from "react";
import "./nav.css";
const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo__cont">
        <img
          src="https://mena-cvproject.vercel.app/static/media/Logo.a6f54d44.png"
          alt="logo"
        />
        <ul>
          <li>Home</li>
          <li>Work Fields</li>
          <li>Developers</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <button className="login">Login</button>
    </div>
  );
};

export default Navbar;

    function Ul({}) {
      return (<ul>
          <li>Home</li>
          <li>Work Fields</li>
          <li>Developers</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>);
    }
  