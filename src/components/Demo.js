import React from "react";
import "./Demo.css";

const Demo = () => {
  return (
    <div className="demo" id="demo">
      <div className="container">
        <p>More Than 100 Financial Planners,</p>
        <p>One Philosophy</p>
        <p>
          Every single one of our financial advisors recieves rigorous training
          according to John Doe's philosophy based on acamdemic research
          (including that of a Nobel Laureate in Economics) and Behavioral
          Finance.
        </p>
        <button className="button">Get your free financial analysis</button>
        <iframe
          width="600"
          height="350"
          src="https://www.youtube.com/embed/x5wkIewzyNg"
          title="funny videos 30 seconds"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Demo;
