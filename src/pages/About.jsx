import React from "react";
import Navbar from "./../components/Navbar";
import "./about.css";
import img1 from "../components/images/5c961b_3e43b5ac15c645efba455698c06ce4d6_mv2.png";
import Footer from "../components/Footer";
const About = () => {
  return (
    <>
      <Navbar />
      <div className="about__header">
        <div className="info">
          <h1>
            Who is M<span style={{ color: "#1771e6" }}>E</span>NA{" "}
            <span style={{ color: "#1771e6" }}>A</span>lliances?
          </h1>
          <p>
            An outsourcing company- for a profit with a social mission - that
            aims to provide a high-quality remote workforce on-demand to solve
            the problem of a local talent shortage for automation while creating
            economic opportunities for women and young people in the Middle East
            and North Africa. Our teams have the ability to scale in a short
            time and handle small to large projects.
          </p>
        </div>
        <img src={img1} alt="img" />
      </div>
      <div className="our__mission">
        <img
          src="https://mena-cvproject.vercel.app/static/media/AboutImg2.c5931954.png"
          alt="img"
        />
        <div>
          <h1>Our Mission</h1>
          <p>
            Our mission is to help alleviate poverty and injustice in the MENA
            region by creating jobs for ONE MILLION women and young people in
            this region. So far, we have trained more than 3000 women and young
            people and created 700+ job opportunities for disadvantaged people
            by connecting them with jobs from Europe, the USA (such as Silicon
            Valley), and the Gulf region.
          </p>
        </div>
      </div>

      <div className="offerings">
        <div className="offering__info">
          <h1>Servise Offerings</h1>
          <p>
            We offer you the various services that a company or project is about
            to require.
          </p>
        </div>
        <div className="offer__blocks">
          <div className="offer offer1">Automation (Out) Sourcing</div>
          <div className="offer offer2">Automation (Out) Sourcing</div>
          <div className="offer offer3">Value-added services</div>
        </div>
      </div>
      <div className="contact__us">
        <div>
          <h1>Contact Us</h1>
          <p>
            Do you have any questions, suggestions, feel free to communicate
            with us, and we will help you answer all your queries?
          </p>
        </div>
        <button>Contact Now</button>
      </div>
      <Footer />
    </>
  );
};

export default About;
