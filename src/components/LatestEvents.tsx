// LatestEvents.tsx

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/LatestEvents.css";

const events = [
  {
    id: "ray-healthcare-gnat-eye-screening-2026",
    city: "Brong Ahafo",
    title: "Brong Ahafo Gnat screening",
    date: "1st May, 2026",
    image:
      "/events/event1.jpeg",
  },
  {
    id: "ray-healthcare-world-glaucoma-awareness-week",
    city: "Online",
    title: "World Glaucoma Week",
    date: "March 4, 2026",
    image:
      "/events/event2.jpeg",
  },
  {
    id: "ray-healthcare-ubuntu-inter-orphanage-games-2026",
    city: "University Of Ghana Stadium",
    title: "⁠Black Sheep Foundation Ubuntu inter orphanage games",
    date: "10th January, 2026",
    image:
      "/events/event3.jpeg",
  },
  {
    id: "ray-healthcare-all-hearts-foundation-outreach",
    city: "Darkuman",
    title: "All Heart Foundation orphanage donations & screening",
    date: "December 28th, 2025",
    image:
      "/events/event4.jpeg",
  },
  {
    id: "ray-healthcare-feed-the-streets-koforidua",
    city: "Koforidua",
    title: "St Joana Foundation Feed the street screening",
    date: "20th December, 2025",
    image:
      "/events/event5.jpeg",
  },
  {
    id: "ray-healthcare-lemps-foundation-shai-osudoku-outreach",
    city: "Asutsuare",
    title: "⁠LEMP foundation community health screening ",
    date: "November 29th, 2025",
    image:
      "/events/event6.jpeg",
  },
  {
    id: "ray-healthcare-gnat-annual-meeting",
    city: "Sunyani",
    title: "⁠Brong Ahafo Gnat screening",
    date: "July 23rd - 25th, 2025",
    image:
      "/events/event7.jpeg",
  },
  {
    id: "ray-healthcare-eastern-region-super-zonals",
    city: "Eastern Region",
    title: "Eastern Region Super Zonal Sports competition screening",
    date: "May 5th - 7th, 2025",
    image:
      "/events/event8.jpeg",
  },
  {
    id: 9,
    city: "Kumasi",
    title: "R.A.Y. Healthcare Africa, KNUST-Chapter school Screening",
    date: "March 25th , 2026",
    image:
      "/events/event9.jpeg",
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
      <div className="latest-events-container">
        {/* Top Label */}
        <motion.div
          className="events-badge"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Latest Events
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="events-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Recent Events
        </motion.h2>

        {/* Cards */}
        <div className="events-grid">
          {events.map((event, index) => (
          <Link key={event.id} to={`/blog/${event.id}`} className="blog-read-more-small">
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
              <div className="event-image-wrapper">
                <motion.img
                  src={event.image}
                  alt={event.title}
                  className="event-image"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                />

                <div className="event-overlay"></div>
              </div>

              {/* Content */}
              <div className="event-content">
                <div className="event-location-pill">
                  <MapPin size={14} />
                  <span>{event.city}</span>
                </div>

                <h3>{event.title}</h3>

                <div className="event-date">
                  <CalendarDays size={16} />
                  <span>{event.date}</span>
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
