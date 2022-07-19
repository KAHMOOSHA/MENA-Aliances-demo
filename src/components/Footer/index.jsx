import React from "react";
import FooterUl from "./FooterUl";
import "./footer.css";

import { FaFacebook, FaGoogle, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer__Wrapper">
      <div className="flex">
        <div className="footer__main">
          <img
            src="https://mena-cvproject.vercel.app/static/media/Logo.a6f54d44.png"
            alt=""
          />
          <p>
            The first Palestinian Arab platform to collect programmers and
            creative designers in the Arab world, and provides them with unique
            opportunities and jobs, and makes it easier for companies to search
            and employ
          </p>
          <h3></h3>
        </div>
        <div className="footer__ul__wrapper">
          <FooterUl
            header="Useful Links"
            data={[
              "Home",
              "Work Fields",
              "Developers",
              "About",
              "My Account",
              "Terms Of Use",
            ]}
          />
          <FooterUl
            header="Contact"
            data={[
              "622 Dixie Path, South 98336",
              "+970599388102",
              "info@menaalliances.com",
            ]}
          />
        </div>
      </div>
      <div className="footer__foot">
        <p>© 2021 Hekto</p>
        <div className="social__wrapper">
          <div className="social__cir" style={{ backgroundColor: "#EA4335" }}>
            <FaGoogle />
          </div>
          <div className="social__cir" style={{ backgroundColor: "#4267B2" }}>
            <FaLinkedin />
          </div>
          <div className="social__cir" style={{ backgroundColor: "#0077B5" }}>
            <FaFacebook />
          </div>
          <div className="social__cir" style={{ backgroundColor: "#1DA1F2" }}>
            <FaTwitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
