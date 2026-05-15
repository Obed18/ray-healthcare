import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/BlogSection.css";
import { blogPosts } from "../data/content";
import { images } from "../data/images";


/* ================= TYPES ================= */

interface FeaturedArticle {
  id: string;
  title: string;
  author: string;
  date: string;
  time: string;
  description: string;
  image: string;
}

interface blogPost {
  id: string;
  tag: string;
  title: string;
  author: string;
  date: string;
  time: string;
  image: number;
}

/* ================= DATA ================= */

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

/* ================= COMPONENT ================= */

const BlogSection: React.FC = () => {
  return (
    <div className="blog-section">
      {/* FEATURED */}
      <div className="blog-featured">
        <motion.div
          className="blog-featured-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="blog-badge">Featured Article</span>

          <h2>{featuredArticle.title}</h2>
          <p>{featuredArticle.description}</p>

          <div className="blog-meta">
            <span>{featuredArticle.author}</span> |{" "}
            <span>{featuredArticle.date}</span> |{" "}
            <span>{featuredArticle.time}</span>
          </div>

          <Link
            to={`/blog/${featuredArticle.id}`}
            className="blog-read-more-small"
          >
            <button className="blog-read-more">
              Read Full Article →
            </button>
          </Link>
        </motion.div>

        <motion.img
          src={featuredArticle.image}
          alt={featuredArticle.title}
          className="blog-featured-img"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />
      </div>

      {/* LATEST */}
      <h3 className="blog-latest-heading">Latest Articles</h3>

<div className="blog-articles-grid">
  {blogPosts.map((post: blogPost, index: number) => (
    <motion.div
      key={post.id}
      className="blog-article-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      {/* ✅ IMAGE */}
      <div className="blog-image-wrapper">
        <img src={images.blog[post.image]} alt={post.title} />
      </div>
      <div className="blog-article-content-card">
      <span className="blog-tag">{post.tag}</span>

      <h4>{post.title}</h4>

      <div className="blog-meta">
        <span>{post.author}</span> |{" "}
        <span>{post.date}</span> |{" "}
        <span>{post.time}</span>
      </div>

      <Link
        to={`/blog/${post.id}`}
        className="blog-read-more-small"
      >
        Read more →
      </Link>
      </div>
    </motion.div>
  ))}
</div>
    </div>
  );
};

export default BlogSection;