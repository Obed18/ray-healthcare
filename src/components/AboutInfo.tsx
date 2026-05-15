// CoreValuesSection.tsx
import React from "react";
import "../styles/Mission.css";
import { motion } from "framer-motion";
import {
  HandHelping, ScanSearch, Award,
} from "lucide-react";

const values = [
  {
    icon: <HandHelping size={32} />,
    title: "Compassionate Care",
    description:
      "Every patient receives personalized attention and care, treating each individual with dignity and respect.",
  },
  {
    icon: <ScanSearch size={32} />,
    title: "Community Focus",
    description:
      "We work closely with local communities to understand their unique needs and provide tailored solutions.",
  },
  {
    icon: <Award size={32} />,
    title: "Excellence",
    description: "We maintain the highest standards of healthcare delivery while making services accessible to all.",
  },
];

const AboutInfo: React.FC = () => {
  return (
    <section className="core-div">
    <section className="core-values-section">
      <div className="core-values-grid">
        {values.map((value, index) => (
          <motion.div
            className="core-value-card"
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + index * 0.15 }}
          >
            <div className="core-icon-wrapper">{value.icon}</div>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
    </section>
  );
};

export default AboutInfo;
