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
            R.A.Y. Healthcare was founded on the belief that good vision is a
            basic human right. We serve communities that are often overlooked
            by traditional healthcare systems—bringing high-quality services
            directly to their doorsteps.
          </p>

          <p className="about-text">
            Our name, R.A.Y., stands not only for our founder's initials but
            also symbolizes our mission to shine a light on the importance of
            eye health in every home, classroom, and community we serve.
          </p>

          <p className="about-text">
            What started as a small initiative has grown into a comprehensive
            healthcare program that has touched hundreds of lives across Ghana,
            providing hope and clear vision to those who need it most.
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