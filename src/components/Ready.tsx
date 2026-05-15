import React from "react";
import { Link } from "react-router-dom";
import "../styles/AboutHighlight.css";

const Ready: React.FC = () => {
  return (
    <div className="about-highlight">
      <h3>Ready to Make a Difference?</h3>
      
      <p>
        Join R.A.Y. Healthcare in bringing accessible eye care to more communities across Ghana.
      </p>

      <Link to="/contact">
        <button className="contact-us-btn">
          Partner with Us
        </button>
      </Link>
    </div>
  );
};

export default Ready;