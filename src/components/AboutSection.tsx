import React from "react";
import { motion } from "framer-motion";
import "../styles/AboutSection.css";

const AboutSection: React.FC = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* LEFT CONTENT */}
        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="about-tag">About Us</span>

          <h2 className="about-heading">Our Story</h2>

          <p className="about-text">
            R.A.Y. Healthcare Africa was founded from a simple but powerful belief that quality eye care should not be a privilege limited by location, financial status, or access to healthcare facilities.
          </p>

          <p className="about-text">
            Across many communities in Ghana, countless individuals continue to live with preventable or manageable vision problems simply because they lack awareness, access to screening services, or the opportunity to seek professional care early. R.A.Y. Healthcare Africa was created to help bridge that gap by bringing eye care directly to the people who need it most.
          </p>

          <p className="about-text">
            What began as a passion for community service and preventive eye care has grown into a movement focused on transforming lives through outreach, education, advocacy, and accessible healthcare initiatives.
          </p>

          {/* Mission Card */}
          <motion.div
            className="mission-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Our Mission</h3>
            <p>
              Making eye care accessible, affordable, and equitable for all
              communities across Ghana.
            </p>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="image-wrapper">
            <img
              src="/About.jpeg"
              alt="Healthcare outreach"
            />

            {/* Floating Card */}
            <motion.div
              className="year-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2>2025</h2>
              <span>FOUNDED</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;