import React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import "./card.css";
// img="https://i.ibb.co/nsb3yMz/download.jpg" name="" description="" skills=""
const DevCard = ({ img, name, description, skills }) => {
  return (
    <Box
      sx={{
        // height: 100,
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        borderRadius: 2,
        display: "flex",
        justifyContent: "space-between",
        p: 2,
      }}
    >
      <img
        style={{
          border: "1px solid blue",
          width: 120,
          height: 120,
          borderRadius: 5,
        }}
        src={img}
        alt="dev img"
      />
      <div className="developer__info">
        <h4>{name}</h4>
        <p>{description}</p>
        <p>Skills: {skills}</p>
      </div>
      <Button sx={{ height: 40, width: 150 }} variant="contained">
        Download CV
      </Button>
    </Box>
  );
};

export default DevCard;
