// CoreValuesSection.tsx
import React from "react";
import "../styles/Mission.css";
import { motion } from "framer-motion";
import {
  CheckCircle,
  HandHelping,
  Scale, Mail,
} from "lucide-react";


const values = [
  {
    icon: <CheckCircle size={32} />,
    title: "Accessibility",
    description:
      "We bring healthcare directly to communities, ensuring everyone has access regardless of location or income.",
  },
  {
    icon: <Scale size={32} />,
    title: "Equity",
    description:
      "We prioritize underserved populations and work to eliminate healthcare disparities in our communities.",
  },
  {
    icon: <HandHelping size={32} />,
    title: "Empowerment",
    description: "We educate and empower individuals with knowledge and resources to maintain their eye health.",
  },
];

const CoreValuesSection: React.FC = () => {
  return (
    <section className="core-div">
    <section className="core-values-section">
      <motion.h2
        className="core-values-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Mission
      </motion.h2>
      <motion.p
        className="core-values-subtitle"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        At R.A.Y. Healthcare, we believe that everyone deserves access to quality healthcare—no matter where they live or go to school.
      </motion.p>
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

export default CoreValuesSection;
