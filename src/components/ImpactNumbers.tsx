import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Users,
  School,
  HeartHandshake,
  Building2,
  Smile,
  MapPinned,
} from "lucide-react";
import "../styles/ImpactNumbers.css";

const impactStats = [
  {
    icon: <Users size={30} />,
    value: "1000+",
    title: "People Screened in 2025",
    subtitle: "Comprehensive eye examinations conducted.",
  },
  {
    icon: <School size={30} />,
    value: "50+",
    title: "Schools Visited",
    subtitle: "Educational institutions reached.",
  },
  {
    icon: <HeartHandshake size={30} />,
    value: "200+",
    title: "Referrals Made",
    subtitle: "Patients connected to treatment.",
  },
  {
    icon: <Building2 size={30} />,
    value: "15+",
    title: "Community Partners",
    subtitle: "Local organizations collaborating.",
  },
  {
    icon: <Smile size={30} />,
    value: "98%",
    title: "Patient Satisfaction",
    subtitle: "Based on follow-up surveys.",
  },
  {
    icon: <MapPinned size={30} />,
    value: "5",
    title: "Regions Covered",
    subtitle: "Across Ghana.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const ImpactNumbers: React.FC = () => {
  return (
    <section className="impact-section">
      <div className="impact-container">
        <motion.div
          className="impact-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="impact-tag">Our Impact</span>

          <h2>Our Impact in Numbers</h2>

          <p>
            These numbers represent real lives touched and communities
            transformed through accessible eye care.
          </p>
        </motion.div>

        <motion.div
          className="impact-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {impactStats.map((stat, index) => (
            <motion.div
              className="impact-card"
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
            >
              <div className="impact-icon">{stat.icon}</div>

              <h3>{stat.value}</h3>

              <h4>{stat.title}</h4>

              <p>{stat.subtitle}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactNumbers;
