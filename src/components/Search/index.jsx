import React from "react";

import TextField from "@mui/material/TextField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Search = ({ width, icon }) => {
  return (
    <div className="TextField__cont">
      <TextField
        sx={{
          width: 222,
        }}
        id="outlined-basic"
        label="Your Email*"
        variant="outlined"
      />
      <button>
        <FontAwesomeIcon icon={icon} />
      </button>
    </div>
  );
};

export default Search;
