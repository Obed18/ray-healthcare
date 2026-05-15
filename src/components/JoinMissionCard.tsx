// JoinMissionCard.tsx
import React from "react";
import { motion } from "framer-motion";
import { HeartHandshake, ArrowRight } from "lucide-react";
import "../styles/JoinMissionCard.css";

const JoinMissionCard: React.FC = () => {
  return (
    <section className="join-mission-section">
      <motion.div
        className="join-mission-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" as const }}
        viewport={{ once: true }}
      >
        {/* Glow Effects */}
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>

        {/* Icon */}
        <motion.div
          className="mission-icon-wrapper"
          whileHover={{ scale: 1.08, rotate: 3 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <HeartHandshake size={34} />
        </motion.div>

        {/* Content */}
        <div className="mission-content">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Join Our Mission
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            viewport={{ once: true }}
          >
            We&apos;re always looking for passionate volunteers to help us
            expand our reach and impact more communities across Ghana. Every
            skill matters, every hour counts.
          </motion.p>

          <motion.button
            className="mission-btn"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            Volunteer With Us
            <ArrowRight size={18} />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default JoinMissionCard;