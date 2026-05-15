import React from "react";
import { Link } from "react-router-dom";
import "../styles/AboutHighlight.css";

const AboutHighlight: React.FC = () => {
  return (
    <div className="about-highlight">
      <h3>Ready to Make a Difference?</h3>
      
      <p>
        Join us in our mission to bring quality eye care to communities across Ghana. Every action counts.
      </p>

      <Link to="/contact">
        <button className="contact-us-btn">
          Get Involved
        </button>
      </Link>
    </div>
  );
};

export default AboutHighlight;