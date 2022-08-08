import React from "react";
import Navbar from "./../components/Navbar/index";
import "./conatctUs.css";
import img1 from "../components/images/Group 3804.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="contact">
        <h1>Contact Us</h1>

        <p>
          Do you have any questions, suggestions, feel free to communicate with
          us, and we will help you answer all your queries?
        </p>

        <div className="conatct__form__cont">
          <div className="cotact__form">
            <form action="" className="form">
              <TextField
                id="outlined-basic"
                label="Full Name"
                variant="outlined"
                sx={{
                  width: "100%",
                }}
              />
              <TextField
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
                sx={{
                  width: "100%",
                }}
              />
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                sx={{
                  width: "100%",
                }}
              />
              <TextField
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                defaultValue="Message"
              />
            </form>

            <div className="form__footer">
              <Button variant="contained">send</Button>
              <p>
                By taking this action, you agree to the terms, conditions and
                privacy policy.
              </p>
            </div>
          </div>
          <img src={img1} alt="img" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
