import React from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Users,
  Globe,
  Award,
} from "lucide-react";
import "../styles/SDGMeasurement.css";

const SDGMeasurement: React.FC = () => {
  return (
    <section className="sdg-measurement">
      <div className="measurement-container">
        {/* Header */}
        <div className="measurement-sdg-header">
          <h2>Measuring Our SDG Impact</h2>
          <p>
            We track our progress against the UN Sustainable Development Goals
            to ensure meaningful, measurable impact.
          </p>
        </div>

        {/* Content */}
        <div className="measurement-sdg-content">
          {/* LEFT SIDE */}
          <div className="measurement-sdg-left">
            {[
              {
                icon: <BarChart3 size={22} />,
                title: "Measurable Progress",
                subtitle:
                  "We track key performance indicators aligned with SDG targets to measure our real-world impact.",
              },
              {
                icon: <Users size={22} />,
                title: "Community-Centered",
                subtitle:
                  "Our programs are designed with community input to ensure they address real needs and create lasting change.",
              },
              {
                icon: <Globe size={22} />,
                title: "Global Standards",
                subtitle:
                  "We follow international best practices and contribute to global efforts in achieving the SDGs by 2030.",
              },
              {
                icon: <Award size={22} />,
                title: "Recognized Impact",
                subtitle:
                  "Our work has been recognized by local and international organizations for its contribution to sustainable development.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="measurement-sdg-point"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="measurement-sdg-icon">{item.icon}</div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="measurement-sdg-right">
            {/* Top Card */}
            <motion.div
              className="measurement-sdg-main-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="measurement-sdg-card-top">
                <span className="measurement-sdg-tag">2024 Progress</span>
                <span className="measurement-sdg-count">6/17</span>
              </div>

              <h3>SDGs Directly Impacted</h3>
              <p>
                Our programs contribute to 6 of the 17 UN Sustainable Development Goals.
              </p>
            </motion.div>

            {/* Stats */}
            <div className="measurement-sdg-stats">
              {[
                { stat: "500+", title: "Lives Improved" },
                { stat: "15+", title: "Communities" },
                { stat: "5", title: "Regions" },
                { stat: "100%", title: "Commitment" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="measurement-sdg-stat-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4>{item.stat}</h4>
                  <p>{item.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SDGMeasurement;