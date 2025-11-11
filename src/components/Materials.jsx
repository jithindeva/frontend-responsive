import React from "react";
import "../App.css";
import mat1 from "../assets/material1.jpg";
import mat2 from "../assets/material2.jpg";
import mat3 from "../assets/material3.jpg";

const Materials = () => {
  return (
    <section className="materials-section">
      <div className="container materials-container">
        <div className="materials-left">
          <p className="tag">MATERIALS</p>
          <h2>Very Serious Materials For Making Furniture</h2>
          <p>
            Because Panto is very serious about designing furniture for our
            environment, using very expensive and famous capital but at a
            relatively lower price.
          </p>
          <a href="#">More Info →</a>
        </div>

        <div className="materials-right">
          <div className="mat-grid">
            <img src={mat1} alt="Material 1" />
            <img src={mat2} alt="Material 2" />
            <img src={mat3} alt="Material 3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Materials;
