import React from "react";
import "../styles/ServicesSection.css";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ScanHeart, School, Megaphone, BriefcaseBusiness, HandHeart, ShieldCheck,
} from "lucide-react";

const cards = [
  {
    id: 1,
    icon: ScanHeart,
    title: "Community Eye Screenings",
    subtitle: "Free comprehensive eye examinations in local communities",
    paragraph: "We conduct thorough eye screenings for early detection of conditions such as glaucoma, cataract, refractive errors etc.",
  },
  {
    id: 2,
    icon: School,
    title: "School Outreach Programs",
    subtitle: "Vision screenings and education in schools",
    paragraph: "We visit schools to screen students and teach them about eye health, helping them to see clearly,comfortably and confidently, so they can focus better and learn without strain.",
  },
  {
    id: 3,
    icon: Megaphone,
    title: "Awareness Campaigns",
    subtitle: "Public education about eye health and prevention",
    paragraph: "We combat misinformation and educate communities about preventable causes of vision loss.",
  },
  {
    id: 4,
    icon: BriefcaseBusiness,
    title: "Vision Education?",
    subtitle: "Training and workshops on eye health",
    paragraph: "We provide educational workshops for teachers, parents, and community leaders about eye health.",
  },
  {
    id: 5,
    icon: HandHeart,
    title: "Treatment Access",
    subtitle: "Connecting patients to affordable treatment",
    paragraph: "We help patients access affordable treatment options and provide referrals to specialized care.",
  },
  {
    id: 6,
    icon: ShieldCheck,
    title: "Follow-up Care",
    subtitle: "Ongoing support and monitoring",
    paragraph: "We provide continued support and follow-up care to ensure the best outcomes for our patients.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
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
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

export default function GrowTogetherSection() {
  return (
    <section className="grow-section">
      <div className="grow-container">
        {/* Heading */}
        <motion.div
          className="grow-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="grow-title">
            Our Services
          </h2>

          <p className="grow-description">
            Comprehensive eye care services delivered directly to communities and schools across Ghana.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grow-cards"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.id}
                className="grow-card"
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 18,
                }}
              >
                {/* Glow */}
                <div className="card-glow"></div>

                {/* Floating blur */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4 + index,
                    repeat: Infinity,
                    ease: "easeInOut" as const,
                  }}
                  className="floating-blur"
                />

                {/* Icon */}
                <motion.div
                  className="icon-wrapper"
                  whileHover={{
                    rotate: 8,
                    scale: 1.08,
                  }}
                >
                  <Icon className="card-icon" />
                </motion.div>

                {/* Text */}
                <div className="card-content">
                  <h3>{card.title}</h3>
                  <small>{card.subtitle}</small>
                  <p>{card.paragraph}</p>
                </div>

                {/* Bottom line */}
                <motion.div
                  className="bottom-line"
                  initial={{ width: 0 }}
                  whileInView={{ width: "40%" }}
                  transition={{ duration: 1 }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
