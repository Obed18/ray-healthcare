import React from "react";
import {
  Clock3,
  Users,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import "../styles/ProgramsSection.css";

type ProgramCard = {
  title: string;
  description: string;
  includes: string[];
};

const programs: ProgramCard[] = [
  {
    title: "Corporate Sponsorship",
    description:
      "Partner with us to sponsor community programs and gain visibility while making a social impact.",
    includes: [
      "Brand visibility",
      "CSR impact",
      "Employee engagement",
      "Tax benefits",
    ],
  },
  {
    title: "Healthcare Collaboration",
    description:
      "Join our network of healthcare providers to expand access to eye care services.",
    includes: [
      "Referral network",
      "Shared resources",
      "Professional development",
      "Community impact",
    ],
  },
  {
    title: "Educational Partnership",
    description:
      "Collaborate with schools and educational institutions to promote student eye health.",
    includes: [
      "Student health programs",
      "Teacher training",
      "Health curriculum",
      "Research opportunities",
    ],
  },
  {
    title: "International Cooperation",
    description:
      "Work with international organizations to scale our impact and share best practices.",
    includes: [
      "Global network",
      "Knowledge exchange",
      "Funding opportunities",
      "Capacity building",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number], // ✅ FIX
    },
  },
};
const ProgramsSection: React.FC = () => {
  return (
    <section className="programs-section">
      <div className="programs-header">
        <motion.span
          className="programs-badge"
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Partnership
        </motion.span>

        <motion.h2
          className="programs-title"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Partner with Us
        </motion.h2>

        <motion.p
          className="programs-subtitle"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
            Join us in creating sustainable change by partnering with R.A.Y. Healthcare to expand access to quality eye care.
        </motion.p>
      </div>

      <motion.div
        className="partners-programs-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {programs.map((program, index) => (
          <motion.div
            className="program-card"
            key={index}
            variants={cardVariants}
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="card-glow" />

            <div className="program-card-top">
              <div>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
              </div>

              <motion.div
                className="card-arrow"
                whileHover={{ rotate: 45 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowUpRight size={20} />
              </motion.div>
            </div>


            <div className="includes-section">
              <h4>Benefits:</h4>

              <ul>
                {program.includes.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: idx * 0.08,
                      duration: 0.4,
                    }}
                  >
                    <CheckCircle2 size={18} />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProgramsSection;