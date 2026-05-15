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
  duration: string;
  audience: string;
  includes: string[];
};

const programs: ProgramCard[] = [
  {
    title: "School Screening Program",
    description:
      "Comprehensive eye screenings for students with educational materials for teachers.",
    duration: "Half day (4 hours)",
    audience: "50-200 students",
    includes: [
      "Vision screening",
      "Educational materials",
      "Teacher training",
      "Follow-up reports",
    ],
  },
  {
    title: "Community Health Fair",
    description:
      "Eye care services as part of a larger community health initiative.",
    duration: "Full day (8 hours)",
    audience: "100-300 people",
    includes: [
      "Eye screenings",
      "Health education",
      "Referral services",
      "Community resources",
    ],
  },
  {
    title: "Workplace Wellness",
    description:
      "Employee eye health screenings and workplace vision safety education.",
    duration: "Half day (4 hours)",
    audience: "30-100 employees",
    includes: [
      "Employee screenings",
      "Workplace safety tips",
      "Vision care resources",
      "Health reports",
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

const cardVariants: any = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as any,
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
          Visit Us
        </motion.span>

        <motion.h2
          className="programs-title"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Request a Visit
        </motion.h2>

        <motion.p
          className="programs-subtitle"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
            Invite R.A.Y. Healthcare to your school, community, or workplace for professional eye care services and health education.
        </motion.p>
      </div>

      <motion.div
        className="programs-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {programs.map((program, index) => (
          <motion.div
            className="program-card"
            key={index}
            variants={cardVariants as any}
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

            <div className="program-meta">
              <div className="meta-item">
                <Clock3 size={18} />
                <span>{program.duration}</span>
              </div>

              <div className="meta-item">
                <Users size={18} />
                <span>{program.audience}</span>
              </div>
            </div>

            <div className="includes-section">
              <h4>Includes:</h4>

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