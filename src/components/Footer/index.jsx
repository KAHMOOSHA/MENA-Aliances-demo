import React from "react";
import FooterUl from "./FooterUl";
const Footer = () => {
  return (
    <div>
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
  );
};

export default Footer;
