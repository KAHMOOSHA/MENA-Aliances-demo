import React from "react";
import Banner from "./../components/Banner";
import Grid from "./../components/Grid";
import Navbar from "./../components/Navbar";
import CarouselCard from "./../components/Carousel";
import NewsLetter from "../components/NewsLetter";
const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Grid />
      <CarouselCard />
      <NewsLetter />
    </>
  );
};

export default Home;
