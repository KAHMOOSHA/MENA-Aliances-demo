import React, { useState } from "react";
import "./wrkFields.css";
import HeaderButton from "../components/HeaderButton";
import Footer from "../components/Footer";
import { Pagination } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Navbar from "../components/Navbar";

const WorkFields = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, "1000");
  // make spinner a componenet
  return (
    <>
      <Navbar />
      {loading ? (
        <div className="spinner">
          <CircularProgress />
        </div>
      ) : (
        <div className="wrk__flds__wrapper">
          <div className="grid2_1 grid__item">
            <div className="DD__overlay">
              <HeaderButton
                header="Mobile"
                button="Explore The Freelance"
                link="/developers"
              />
            </div>
          </div>
          <div className="grid2_2 grid__item">
            <div className="DD__overlay">
              <HeaderButton
                header="Projects Manegment"
                button="Explore The Freelance"
                link="/developers"
              />
            </div>
          </div>
          <div className="grid2_3 grid__item">
            <div className="DD__overlay">
              <HeaderButton
                header="Web Developer"
                button="Explore The Freelance"
                link="/developers"
              />
            </div>
          </div>
        </div>
      )}
      <Pagination />
      <Footer />
    </>
  );
};

export default WorkFields;
