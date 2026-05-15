import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/FeaturedArticles.css";

interface FeaturedArticle {
  id: string;
  title: string;
  author: string;
  date: string;
  time: string;
  description: string;
  image: string;
}

const featuredArticle: FeaturedArticle = {
  id: "ray-healthcare-ocular-manifestations-webinar",
  title: "R.A.Y. Healthcare Hosts Webinar on Ocular Manifestations of Systemic Diseases",
  author: "R.A.Y. Healthcare",
  date: "March 14, 2026",
  time: "7 min read",
  description:
    "R.A.Y. Healthcare hosted an insightful webinar on 14th March 2026 focused on the ocular manifestations of systemic diseases, highlighting the critical connection between overall health and eye conditions.",
  image: "/blog/webinar.jpeg",
};


const FeaturedArticle = () => {
  return (
    <section className="featured-article-section">
      <div className="featured-article-container">
        {/* LEFT CONTENT */}
        <motion.div
          className="featured-content"
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="featured-tag">
            <span>Featured Article</span>
          </div>

          <h1>{featuredArticle.title}</h1>

          <p>
            {featuredArticle.description}
          </p>

          <div className="featured-buttons">
          <Link
            to={`/blog/${featuredArticle.id}`}
            className="blog-read-more-small"
          >
            <button className="primary-btn">
              Read Full Article
              <ArrowUpRight size={18} />
            </button>
          </Link>
          <Link to="/blog">
            <button className="secondary-btn">
              Discover More News
            </button>
            </Link>
          </div>

          {/* Floating Stats */}
          <motion.div
            className="floating-card"
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut" as const,
            }}
          >
            <span>Trending News</span>
            <h3>100+ Readers</h3>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="featured-image-wrapper"
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="image-overlay"></div>

          <img
            src={featuredArticle.image}
            alt="Featured Article"
          />

          {/* Glass Floating Box */}
          <motion.div
            className="glass-card"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut" as const,
            }}
          >
            <span>Latest Update</span>
            <h4>Ocular Manifestations of Systemic Diseases</h4>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedArticle;