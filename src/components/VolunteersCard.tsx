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
  tag: string;
};

const programs: ProgramCard[] = [
  {
    title: "Healthcare Assistant",
    description:
      "Support our medical team during screenings and help with patient care.",
    includes: [
      "Basic healthcare knowledge",
      "Good communication skills",
      "Compassionate nature",
    ],
    tag: "4-8 hours per month",
  },
  {
    title: "Community Educator",
    description:
      "Help educate communities about eye health and prevention strategies.",
    includes: [
      "Public speaking skills",
      "Local language fluency",
      "Teaching experience preferred",
    ],
    tag: "6-10 hours per month",
  },
  {
    title: "Administrative Support",
    description:
      "Assist with scheduling, data entry, and program coordination.",
    includes: [
      "Computer literacy",
      "Organizational skills",
      "Attention to detail",
    ],
    tag: "3-5 hours per week",
  },
  {
    title: "Program Coordinator",
    description:
      "Lead outreach programs and coordinate with local communities.",
    includes: [
      "Leadership experience",
      "Project management skills",
      "Community connections",
    ],
    tag: "10-15 hours per month",
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
          Volunteer
        </motion.span>

        <motion.h2
          className="programs-title"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Volunteer with Us
        </motion.h2>

        <motion.p
          className="programs-subtitle"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
            Join our team of dedicated volunteers and help us bring quality eye care to communities across Ghana.
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
                <div className="program-tag">{program.tag}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProgramsSection;