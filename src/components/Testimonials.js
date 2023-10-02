import React from "react";
import "./Testimonials.css";
import user1 from "./images/user1.jpeg";
import user2 from "./images/user2.jpeg";
import user3 from "./images/user3.jpeg";

const Testimonials = () => {
  return (
    <div className="testimonials" id="testimonials">
      <div className="container">
        <h2>Testimonials</h2>
        <div className="card-list">
          <div className="card-item">
            <img src={user1} alt="user1" />
            <p>
              "It is not every day that you come across a passionate and
              trustworthy financial advisor. John Doe is true professional who
              does his work really well. Thanks John!"
            </p>
            <p>Johnson.M.J</p>
            <p>Director of "Financial Times"</p>
          </div>
          <div className="card-item">
            <img src={user2} alt="user1" />
            <p>
              "In just 2 very short meetings with John he managed to find the
              solution personally catered to my situation and expectations.
              Punctual, well informed and very reliable."
            </p>
            <p>Carol Harper</p>
            <p>Founder of Bla-Bla Technologies</p>
          </div>
          <div className="card-item">
            <img src={user3} alt="user1" />
            <p>
              "John Doe has done the financials of my multiple companies and his
              job is always well-done and flawless. He is a one-stop-shop for
              all your financial needs."
            </p>
            <p>Michael Jackson</p>
            <p>Founder of Jackson and Jackson Companies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
