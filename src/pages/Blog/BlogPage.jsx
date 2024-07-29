import React from 'react';
import BlogPost from '../../components/Blog/BlogPost'; 


const BlogPage = () => {
  const blogPosts = [
    {
      title: "Understanding Cryptocurrency",
      summary: "An introduction to the world of cryptocurrencies, exploring the basics and the potential they hold.",
      link: "https://www.fidelity.com/"
    },
    {
      title: "Blockchain Technology Explained",
      summary: "A deep dive into blockchain technology and how it powers the cryptocurrency ecosystem.",
      link: "https://blog.bitpanda.com/en"
    },
    {
      title: "Top 10 Cryptocurrencies to Watch",
      summary: "A look at the top 10 cryptocurrencies that are making waves in the market.",
      link: "https://www.coindesk.com/"
    },
  ];

  return (
    <div className="blog-page">
      <h2>Blog</h2>
      <div className="blog-container">
        {blogPosts.map((post, index) => (
          <BlogPost key={index} title={post.title} summary={post.summary} link={post.link} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
