import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <foot className="container">
        <ul className="footer-menu">
          <li className="footer-item">
            <a href="/">Home</a>
          </li>
          <li className="footer-item">
            <a href="/">About</a>
          </li>
          <li className="footer-item">
            <a href="/">Testimonials</a>
          </li>
          <li className="footer-item">
            <a href="/">Demo</a>
          </li>
        </ul>
        <div className="line"></div>
        <p>2020 Execute, Inc. All rights reserved</p>
      </foot>
    </div>
  );
};

export default Footer;
