import React from "react";
import { useParams } from "react-router-dom";
import "../styles/global.css";
import ArticleSection from "../components/ArticleSection";
import { Blog } from "../components/ArticleSection";
import blogPosts from "../data/blogData";
import IconHovers from "../components/IconHovers";


const Article: React.FC = () => {
  const { id } = useParams<{ id?: string }>();

  const blog: Blog | undefined = blogPosts.find(
    (post) => post.id === id
  );

  return (
    <div className="article-div">
      {blog ? (
        <ArticleSection blog={blog} />
      ) : (
        <p style={{ padding: "2rem", textAlign: "center" }}>
          Article not found.
        </p>
      )}
      <IconHovers />
    </div>
  );
};

export default Article;