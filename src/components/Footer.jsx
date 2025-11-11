import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Left Brand Info */}
        <div className="footer-brand">
          <h3>Panto</h3>
          <p>
            The advantage of hiring a workspace with us is that it gives you
            comfortable service and all-around facilities.
          </p>
          <small>Copyright © 2021</small>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h4 className="footer-title">Services</h4>
          <ul>
            <li>Email Marketing</li>
            <li>Campaigns</li>
            <li>Branding</li>
          </ul>
        </div>

        {/* Furniture */}
        <div className="footer-column">
          <h4 className="footer-title">Furniture</h4>
          <ul>
            <li>Beds</li>
            <li>Chair</li>
            <li>All</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="footer-column">
          <h4 className="footer-title">Follow Us</h4>
          <ul className="footer-socials">
            <li>
              <span>📘</span> Facebook
            </li>
            <li>
              <span>🐦</span> Twitter
            </li>
            <li>
              <span>📸</span> Instagram
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <a href="#">Terms & Conditions</a>
        <a href="#">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
