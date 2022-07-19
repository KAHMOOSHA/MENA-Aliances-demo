import React from "react";

function FooterUl({ header, data }) {
  return (
    <div className="footer__ul">
      <h4 className="footer__ul__header">{header}</h4>
      <ul>
        {data.map((value) => (
          <li>{value}</li>
        ))}
      </ul>
    </div>
  );
}

export default FooterUl;
