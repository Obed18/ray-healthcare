import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import "../styles/VolunteerSection.css";
import PartnerCard from "./PartnerCard";


const interests = [
  "Corporate Sponsorship",
  "Healthcare Collaboration",
  "Educational Partnership",
  "International Cooperation",
  "Other",
];

const volunteerPoints = [
  {
    title: "Proven Impact",
    subtitle:
      "Our track record shows measurable results in improving community health outcomes and reaching underserved populations.",
  },
  {
    title: "Sustainable Approach",
    subtitle:
      "We focus on building long-term solutions that create lasting change in communities across Ghana.",
  },
  {
    title: "Collaborative Partnership",
    subtitle:
      "We work closely with partners to ensure mutual benefit and shared success in achieving our goals.",
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
        <PartnerCard />
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
            <h3>Why Partner with R.A.Y. Healthcare?</h3>

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
            <h2>Partnership Inquiry</h2>

            <p>
              Interested in partnering with us? Fill out this form and we'll discuss how we can work together.
            </p>

            <form className="volunteer-form">
              {/* ROW 1 */}
              <div className="form-row">
                <div className="form-group">
                  <label>Contact Name</label>
                  <input type="text" placeholder="Enter full name" />
                </div>

                <div className="form-group">
                  <label>Organization</label>
                  <input type="text" placeholder="Enter Organization name" />
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
                  <input type="tel" placeholder="+233XXXXXXXX" />
                </div>
              </div>
                <div className="form-group">
                <label htmlFor="partnershipType">Partnership Type</label>

                <select
                    id="partnershipType"
                    className="form-select"
                    value={selectedInterests[0] || ""}
                    onChange={(e) => setSelectedInterests([e.target.value])}
                >
                    <option value="">Select Partnership Type</option>

                    {interests.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                    ))}
                </select>
                </div>
              <div className="form-group">
                <label>Partnership Goals</label>

                <textarea
                  rows={5}
                  placeholder="Tell us about your Organization and what you to archieve with this partnership"
                />
              </div>

              <button type="submit" className="submit-btn">
                Submit Inquiry
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VolunteerSection;