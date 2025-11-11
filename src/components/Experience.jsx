import React from "react";
import "../App.css";
import experienceImg from "../assets/Experience.jpg"; // replace with your real image

const Experience = () => {
  return (
    <section className="experience-section">
      <div className="container experience-container">
        <div className="experience-left">
          <img src={experienceImg} alt="Experience" />
        </div>
        <div className="experience-right">
          <p className="tag">EXPERIENCES</p>
          <h2>We Provide You The Best Experience</h2>
          <p>
            You don’t have to worry about the result because all of these
            interiors are made by people who are professionals in their fields,
            with an elegant and luxurious style and with premium quality
            materials.
          </p>
          <a href="#">More Info →</a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
