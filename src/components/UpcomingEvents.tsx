// LatestEvents.tsx

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/LatestEvents.css";

const upcomingEvents = [
  {
    id: "blood-donation-health-screening-exercise",
    city: "Adabraka Old Kasapa",
    title: "Blood Donation and health Screening Exercise",
    date: "27th June, 2026",
    image:
      "/events/event1.jpeg",
  },
  {
    id: "ray-healthcare-world-glaucoma-awareness-week",
    city: "Anticipate",
    title: "One year anniversary",
    date: "Coming soon",
    image:
      "/events/event2.jpeg",
  },
];

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut" as const,
    },
  }),
};

const LatestEvents = () => {
  return (
    <section className="latest-events-section">
      <div className="upcoming-events-container">
        {/* Top Label */}
        <motion.div
          className="events-badge"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Upcoming Events
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="events-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Upcoming Events
        </motion.h2>

        {/* Cards */}
        <div className="events-grid">
          {upcomingEvents.map((upcomingevent, index) => (
          <Link key={upcomingevent.id} to={`/blog/${upcomingevent.id}`} className="blog-read-more-small">
            <motion.div
              className="event-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              viewport={{ once: true }}
              custom={index}
            >
              {/* Image */}
              {/* <div className="event-image-wrapper">
                <motion.img
                  src={upcomingevent.image}
                  alt={upcomingevent.title}
                  className="event-image"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                />

                <div className="event-overlay"></div>
              </div> */}

              {/* Content */}
              <div className="event-content">
                <div className="event-location-pill">
                  <MapPin size={14} />
                  <span>{upcomingevent.city}</span>
                </div>

                <h3>{upcomingevent.title}</h3>

                <div className="event-date">
                  <CalendarDays size={16} />
                  <span>{upcomingevent.date}</span>
                </div>
              </div>
            </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestEvents;
