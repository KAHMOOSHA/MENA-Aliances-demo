import React from "react";
import { FaCaretRight } from "react-icons/fa";

function FooterUl({ header, data }) {
  return (
    <div className="footer__ul">
      <h4 className="footer__ul__header">{header}</h4>
      <ul>
        {data.map((value) => (
          <li>
            <FaCaretRight className="arrow__icon" />
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterUl;
