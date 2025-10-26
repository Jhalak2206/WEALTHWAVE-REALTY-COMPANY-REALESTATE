// File: src/pages/Blog.js

import React from 'react';
import { Link } from 'react-router-dom'; 
import './Blog.css';
import { Helmet } from "react-helmet";

// Placeholder data for blog posts (SEO-friendly slugs)
const blogPosts = [
    { 
        slug: "noida-jewar-effect-real-estate-surge", 
        title: "🚀 Noida's Real Estate is Surging! The Jewar Effect is Real.", 
        summary: "Jewar Airport fuels massive wealth growth—plots up 536%, apartments up 158%, redefining investment potential.", 
        date: "Oct 1, 2025", 
        category: "Market Trends" 
    },
    { 
        slug: "noida-airport-set-to-take-off-october-30", 
        title: "✈️ Noida International Airport Set to Take Off on October 30 — A Game Changer for NCR Real Estate", 
        summary: "Jewar Airport’s October 30 inauguration transforms NCR—boosting connectivity, real estate, logistics, and investment opportunities.", 
        date: "Sep 23, 2025", 
        category: "Market Trends" 
    },
    // Add other posts here
];

const Blog = () => {
  return (
    <div className="blog-page">

      {/* SEO Meta Tags */}
      <Helmet>
        <title>Real Estate Blog | WealthWave Realty</title>
        <meta name="description" content="Stay updated with the latest real estate trends, investment guides, and property insights in Noida and NCR from WealthWave Realty." />
        <link rel="canonical" href="https://wealthwaverealty.in/blog" />
      </Helmet>

      <div className="blog-content-container">
        <main className="blog-main">
          {blogPosts.map(post => (
            <article key={post.slug} className="blog-post-card">
              {/* Blog Post Title Link */}
              <Link to={`/blog/${post.slug}`} className="post-link">
                <h2>{post.title}</h2>
              </Link>
              {/* Blog Summary */}
              <p>{post.summary}</p>
              {/* Read More Button */}
              <Link to={`/blog/${post.slug}`} className="read-more-btn">Read Full Article &rarr;</Link>
            </article>
          ))}

          {/* Optional Internal Linking Section */}
          <section className="internal-links">
            <h3>Explore More</h3>
            <p>
              Check out our <Link to="/properties">property listings</Link> or learn how to maximize your ROI with our <Link to="/guides">investment guides</Link>.
            </p>
            <p>
              Want to know more about us? <Link to="/about">About WealthWave Realty</Link> or <Link to="/contact">get in touch</Link> today.
            </p>
          </section>

        </main>

        {/* Optional Sidebar could go here */}
      </div>
    </div>
  );
};

export default Blog;
