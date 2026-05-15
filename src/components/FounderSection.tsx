import React from "react";
import { motion } from "framer-motion";
import {
  Stethoscope,
  HeartHandshake,
  Microscope,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import "../styles/FounderSection.css";

const tags = [
  {
    title: "Community Health Leadership",
    icon: <HeartHandshake size={18} />,
  },
  {
    title: "Strategic Healthcare Development",
    icon: <ShieldCheck size={18} />,
  },
  {
    title: "Pediatric Optometry",
    icon: <Stethoscope size={18} />,
  },
  {
    title: "Public Health Innovation",
    icon: <Sparkles size={18} />,
  },
  {
    title: "Research & Development",
    icon: <Microscope size={18} />,
  },
];

const FounderSection: React.FC = () => {
  return (
    <section className="founder-section">
      <div className="founder-bg-glow founder-glow-1"></div>
      <div className="founder-bg-glow founder-glow-2"></div>

      <div className="founder-container">
        {/* Left Content */}
        <motion.div
          className="founder-content"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="founder-badge">Leadership & Vision</span>

          <h2 className="founder-heading">Our Founder</h2>

          <div className="founder-name-wrapper">
            <h3 className="founder-name">Dr. Danso Yaw Poakwa</h3>
            <span className="founder-role">
              Founder & Lead Optometrist
            </span>
          </div>

          <p className="founder-description">
            As a visionary student optometrist and emerging eye care leader at
            KNUST, I'm pioneering accessible eye care solutions across Ghana
            through strategic community impact initiatives. Having successfully
            orchestrated mass eye screenings for over 40,000 students and
            spearheaded multiple national and regional outreach programs, I
            established RAY Healthcare to systematically eliminate barriers to
            quality eye care nationwide.
          </p>

          <p className="founder-description">
            My expertise spans from conducting cutting-edge low vision research
            to delivering specialized care for children with special needs,
            while my leadership in Christian youth programs demonstrates my
            commitment to integrating faith-driven service with professional
            excellence. I don't just advocate for change—I architect it,
            transforming how Ghana approaches community eye health through
            innovative partnerships and scalable healthcare solutions.
          </p>

          <div className="founder-tags">
            {tags.map((tag, index) => (
              <motion.div
                key={index}
                className="founder-tag"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.03 }}
              >
                {tag.icon}
                <span>{tag.title}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Image Card */}
        <motion.div
          className="founder-image-wrapper"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="founder-image-card">
            <div className="founder-image-overlay"></div>

            {/* Replace with actual image */}
            <img
              src="/profiles/Danso.jpeg"
              alt="Dr. Danso Yaw Poakwa"
              className="founder-image"
            />

            <div className="founder-floating-card">
              <span className="floating-small">Impact Reached</span>
              <h4>40,000+ Students</h4>
              <p>Eye screenings conducted nationwide</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderSection;