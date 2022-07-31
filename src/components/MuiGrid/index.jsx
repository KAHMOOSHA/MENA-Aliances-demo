import React, { useState, useEffect } from "react";
import DevCard from "../Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import TextField from "@mui/material/TextField";
import "./workFields.css";
import DropDown from "../DropDown";
import RadioInput from "../RadioInput";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { Pagination } from "@mui/material";

export default function Elevation() {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);

  let arr = [];
  countries.map((item) => arr.push(item.name.common));

  useEffect(() => {
    const getAllCountries = async () => {
      try {
        const getCountries = await axios("https://restcountries.com/v3.1/all");
        const allCountries = getCountries.data;
        setCountries(allCountries);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getAllCountries();
  }, []);

  return (
    <>
      {loading ? (
        <div className="spinner">
          <CircularProgress />
        </div>
      ) : (
        <div
          className="developers__main"
          style={{ padding: 20, marginTop: 70 }}
        >
          <div className="developers__filter">
            <h1>Filter</h1>
            <div className="filter__specs">
              <div className="filter__category">
                <h3>Category</h3>
                <DropDown
                  label="Category"
                  cData={["Frontend", "Backend", "Fullstack"]}
                />
              </div>
              <div className="filter__xpLvl">
                <h3>Experiance Level</h3>
                <RadioInput name="xp" value="intery" />
                <RadioInput name="xp" value="mid" />
                <RadioInput name="xp" value="expert" />
              </div>
              <div className="filter__category">
                <h3>Developer Location</h3>
                <DropDown label="Developer Location" cData={arr} />
              </div>
            </div>
          </div>

          <div className="developers__right">
            <div className="TextField__cont">
              <TextField
                sx={{
                  width: "100%",
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                }}
                id="outlined-basic"
                label="Your Email*"
                variant="outlined"
              ></TextField>
              <button>
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
            <div className="devlopers__list">
              <DevCard
                img="https://i.ibb.co/nsb3yMz/download.jpg"
                name="Omar"
                description="lorem this is how we do it around here and htis is how"
                skills="fron and bak"
              />
              <DevCard
                img="https://i.ibb.co/nsb3yMz/download.jpg"
                name="Omar"
                description="lorem this is how we do it around here and htis is how"
                skills="fron and bak"
              />
              <DevCard
                img="https://i.ibb.co/nsb3yMz/download.jpg"
                name="Omar"
                description="lorem this is how we do it around here and htis is how"
                skills="fron and bak"
              />
              <DevCard
                img="https://i.ibb.co/nsb3yMz/download.jpg"
                name="Omar"
                description="lorem this is how we do it around here and htis is how"
                skills="fron and bak"
              />
              <DevCard
                img="https://i.ibb.co/nsb3yMz/download.jpg"
                name="Omar"
                description="lorem this is how we do it around here and htis is how"
                skills="fron and bak"
              />
              <DevCard
                img="https://i.ibb.co/nsb3yMz/download.jpg"
                name="Omar"
                description="lorem this is how we do it around here and htis is how"
                skills="fron and bak"
              />
              <DevCard
                img="https://i.ibb.co/nsb3yMz/download.jpg"
                name="Omar"
                description="lorem this is how we do it around here and htis is how"
                skills="fron and bak"
              />
              <DevCard
                img="https://i.ibb.co/nsb3yMz/download.jpg"
                name="Omar"
                description="lorem this is how we do it around here and htis is how"
                skills="fron and bak"
              />
              <Pagination count={10} variant="outlined" shape="rounded" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
