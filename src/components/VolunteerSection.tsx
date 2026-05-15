import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import "../styles/VolunteerSection.css";
import VolunteersCard from "./VolunteersCard";


const interests = [
  "Healthcare Support",
  "Community Education",
  "Administrative",
  "Program Coordination",
];

const volunteerPoints = [
  {
    title: "Make a Real Difference",
    subtitle:
      "Directly impact lives by helping provide essential healthcare services to underserved communities.",
  },
  {
    title: "Gain Valuable Experience",
    subtitle:
      "Develop skills in healthcare, community outreach, and program management while serving others.",
  },
  {
    title: "Join a Supportive Community",
    subtitle:
      "Work alongside passionate individuals who share your commitment to improving community health.",
  },
  {
    title: "Flexible Commitment",
    subtitle:
      "Choose volunteer opportunities that fit your schedule and availability.",
  },
];

const VolunteerSection: React.FC = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const handleCheckboxChange = (value: string) => {
    setSelectedInterests((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <section className="volunteer-section">
        <VolunteersCard />
      <div className="volunteer-container">
        {/* LEFT CONTENT */}
        <motion.div
          className="volunteer-info"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="why-volunteer">
            <h3>Why Volunteer with R.A.Y.?</h3>

            <div className="volunteer-points">
              {volunteerPoints.map((item, index) => (
                <motion.div
                  className="volunteer-point"
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="check-icon">
                    <CheckCircle2 size={18} />
                  </div>

                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* STATS CARD */}
          <motion.div
            className="benefits-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3>Volunteer Benefits</h3>

            <div className="benefits-grid">
              <div className="benefit-item">
                <h2>50+</h2>
                <p>Active Volunteers</p>
              </div>

              <div className="benefit-item">
                <h2>95%</h2>
                <p>Satisfaction Rate</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          className="volunteer-form-wrapper"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="volunteer-form-card">
            <h2>Join Our Volunteer Team</h2>

            <p>
              Fill out this form to express your interest in volunteering with
              R.A.Y. Healthcare.
            </p>

            <form className="volunteer-form">
              {/* ROW 1 */}
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" placeholder="Enter first name" />
                </div>

                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" placeholder="Enter last name" />
                </div>
              </div>

              {/* ROW 2 */}
              <div className="form-row">
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="Enter email address" />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="Enter phone number" />
                </div>
              </div>

              {/* LOCATION */}
              <div className="form-group">
                <label>Location</label>
                <input type="text" placeholder="Enter your location" />
              </div>

              {/* INTERESTS */}
              <div className="form-group">
                <label>Areas of Interest</label>

                <div className="checkbox-grid">
                  {interests.map((item, index) => (
                    <label className="checkbox-item" key={index}>
                      <input
                        type="checkbox"
                        checked={selectedInterests.includes(item)}
                        onChange={() => handleCheckboxChange(item)}
                      />

                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* EXPERIENCE */}
              <div className="form-group">
                <label>Experience & Skills</label>

                <textarea
                  rows={5}
                  placeholder="Tell us about your experience, skills, and how you'd like to contribute..."
                />
              </div>

              <button type="submit" className="submit-btn">
                Submit Application
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VolunteerSection;