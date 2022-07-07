import React from "react";
import TextField from "@mui/material/TextField";
import "./newLetter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const NewsLetter = () => {
  return (
    <div className="news__letter">
      <h1>Newsletter</h1>
      <p>Get timely updates from your favorite products.</p>
      <div className="TextField__cont">
        <TextField
          className="idid"
          id="outlined-basic"
          label="Your Email*"
          variant="outlined"
        />
        <button>
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
