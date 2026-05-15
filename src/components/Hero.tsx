// src/components/HeroSection.tsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import "../styles/Hero.css";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  const heroImages = ["/Hero1.jpg", "/Hero2.jpg", "/Hero3.jpg"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [heroImages.length]);

  return (
    <section
      className="hero-container"
      style={{
        background: `linear-gradient(to right, rgba(0, 50, 20, 0.9), rgba(0, 20, 40, 0.8)), url(${heroImages[currentImageIndex]}) no-repeat center/cover`,
      }}
    >
      <div className="hero-overlay">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-top-badge">
            <CheckCircle size={16} /> Healthcare • Vision • Community
          </div>

          <h1 className="hero-title">
            Bringing Vision to  <br /> Communities with <strong> R.A.Y</strong>
          </h1>

          <p className="hero-subtitle">
            Everyone deserves access to quality healthcare. We bring essential eye care services directly to communities and schools, preventing vision loss through early intervention and education.
          </p>

          <div className="hero-benefits">
            <div>
              <Clock size={16} />1000+ Patients Treated
            </div>
            <div>
              <ShieldCheck size={16} /> 50+ Schools Reached
            </div>
            <div>
              <ShieldCheck size={16} /> 99.9% Success Rate
            </div>
            <div>
              <CheckCircle size={16}/> 6 SDG Goals
            </div>
            </div>


          <div className="hero-buttons">
            <Link to="/contact" className="link-text">
              <button className="hero-primary-btn">
                Contact Us <ArrowRight size={16} />
              </button>
            </Link>
            <Link to="/get-involved" className="link-text">
              <button className="hero-secondary-btn">Get Involved</button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
