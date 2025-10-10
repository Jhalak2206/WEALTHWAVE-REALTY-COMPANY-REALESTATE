import React from 'react';
// ----------------------------------------------------
// ✅ FIX: Import Link from 'react-router-dom'
import { Link } from 'react-router-dom'; 
// ----------------------------------------------------
import './Blog.css';


// Placeholder data for blog posts (Updated)
const blogPosts = [
    { 
        // ❌ Removed: id: 1, 
        // ✅ Added: SEO-friendly slug
        slug: "noida-jewar-effect-real-estate-surge", 
        title: "🚀 Noida's Real Estate is Surging! The Jewar Effect is Real.", 
        summary: "Jewar Airport fuels massive wealth growth—plots up 536%, apartments up 158%, redefining investment potential.", 
        date: "Oct 1, 2025", 
        category: "Market Trends" 
    },
    { 
        // ❌ Removed: id: 2, 
        // ✅ Added: SEO-friendly slug
        slug: "noida-airport-set-to-take-off-october-30", 
        title: "✈️ Noida International Airport Set to Take Off on October 30 — A Game Changer for NCR Real Estate", 
        summary: "Jewar Airport’s October 30 inauguration transforms NCR—boosting connectivity, real estate, logistics, and investment opportunities.", 
        date: "Sep 23, 2025", 
        category: "Market Trends" 
    },
    // ... rest of the posts
];

const Blog = () => {
  return (
    <div className="blog-page">
      {/* ... other JSX ... */}
      <div className="blog-content-container">
        <main className="blog-main">
          {blogPosts.map(post => (
            // Use the slug as the key (since it's unique)
            <article key={post.slug} className="blog-post-card">
              {/* This Link is CRITICAL for SEO URLs! */}
              <Link to={`/blog/${post.slug}`} className="post-link">
                <h2>{post.title}</h2>
              </Link>
              {/* ... meta and summary ... */}
              <p>{post.summary}</p>
              {/* The read more button also uses the slug */}
              <Link to={`/blog/${post.slug}`} className="read-more-btn">Read Full Article &rarr;</Link>
            </article>
          ))}
        </main>
        {/* ... sidebar ... */}
      </div>
    </div>
  );
};

export default Blog;