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
            As an emerging leader in community eye health and preventive healthcare, I am dedicated to advancing accessible, sustainable, and impact-driven eye care solutions across Ghana through strategic outreach, public health education, and healthcare partnerships. As the founder of R.A.Y. Healthcare Africa, I have successfully led and coordinated large-scale vision screening and eye health education initiatives that have reached diverse populations across schools, underserved communities, professional associations, orphanages, and national events.
          </p>

          <p className="founder-description">
            My experience includes directing eye screening and awareness campaigns during the Eastern Region Super Zonals Sports Competition, where over 40,000 students were reached, as well as leading consecutive annual vision screening initiatives for more than 1,000 educators during the Ghana National Association of Teachers (GNAT) meetings in the Brong Ahafo Region. I have also spearheaded community outreach programs in rural farming communities within the Shai Osudoku District through partnerships with organizations such as LEMPs Foundation, delivering eye care services and health education to underserved populations.
          </p>
          <p className="founder-description">
            In addition, I have collaborated with foundations including St Joana Foundation, All Hearts Foundation and Black Sheep Foundation to integrate vision care into humanitarian outreach initiatives, orphanage support programs, and youth-centered community events across Ghana.
          </p>
          <p className="founder-description">
            My professional interests extend beyond outreach into low vision research, preventive ophthalmic care, and specialized support for children and vulnerable populations. I am particularly passionate about strengthening healthcare accessibility through scalable community-based models, strategic partnerships, and public health advocacy.
          </p>
          <p className="founder-description">
            Alongside my healthcare work, my leadership involvement in youth and faith-based initiatives reflects a strong commitment to service, integrity, and transformational leadership. I remain focused on driving innovative approaches to community eye health while contributing meaningfully to the broader conversation on equitable healthcare delivery in Ghana and across Africa.
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