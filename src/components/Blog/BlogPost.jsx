import React from 'react';
import './BlogPost.css';

const BlogPost = ({ title, summary, link }) => {
  return (
    <div className="blog-post">
      <h3>{title}</h3>
      <p>{summary}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">Read More</a>
    </div>
  );
};

export default BlogPost;
