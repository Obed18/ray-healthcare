import { motion } from "framer-motion";
import { Clock3, MapPin, HeartHandshake } from "lucide-react";
import "../styles/VolunteerImpact.css";

const stats = [
  {
    id: 1,
    icon: <Clock3 size={32} />,
    value: "1,000+",
    label: "Hours Volunteered",
  },
  {
    id: 2,
    icon: <MapPin size={32} />,
    value: "25+",
    label: "Communities Served",
  },
  {
    id: 3,
    icon: <HeartHandshake size={32} />,
    value: "5,000+",
    label: "Lives Impacted",
  },
];

const VolunteerImpact = () => {
  return (
    <section className="volunteer-impact">
      <div className="volunteer-impact__container">
        <motion.div
          className="volunteer-impact__content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="volunteer-impact__tag">
            Making a Difference
          </span>

          <h2 className="volunteer-impact__title">
            Volunteer Impact
          </h2>

          <p className="volunteer-impact__description">
            Our incredible volunteers make a real difference in
            communities across Ghana.
          </p>
        </motion.div>

        <div className="volunteer-impact__grid">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="impact-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              whileHover={{ y: -10, scale: 1.03 }}
              viewport={{ once: true }}
            >
              <div className="impact-card__icon">
                {stat.icon}
              </div>

              <h3 className="impact-card__value">
                {stat.value}
              </h3>

              <p className="impact-card__label">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VolunteerImpact;