// BlogSinglePost.js (The final, complete component with Rich Text integration)

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// ✅ Corrected import paths assuming files are in src/utils/
import { getEntryBySlug } from '../utils/contentfulClient'; 
import RichTextRenderer from '../utils/RichTextRenderer'; 

import './BlogSinglePost.css'; 

const BlogSinglePost = () => {
    // 1. Get the slug from the dynamic route '/blog/:slug'
    const { slug } = useParams(); 
    
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Reset state for a clean fetch
        setLoading(true);
        setError(null);
        setPost(null);

        if (slug) {
            // 🎯 CRUCIAL PART: Use the Contentful helper function
            getEntryBySlug(slug) 
                .then(entry => {
                    if (entry) {
                        // Contentful returns the actual entry object. We store the 'fields'.
                        setPost(entry.fields); 
                    } else {
                        // If Contentful returns no entry for the slug
                        setError("Article not found.");
                    }
                })
                .catch(err => {
                    console.error("Contentful fetch failed:", err);
                    setError("A network or API error occurred.");
                })
                .finally(() => {
                    setLoading(false);
                });
        }
            
    // Dependency array ensures this runs only when the slug changes.
    }, [slug]); 

    // --- Conditional Rendering (Loading/Error States) ---
    
    if (loading) {
        return <h1 className="post-loading">Loading Content...</h1>;
    }
    
    // Check for local error state OR if the post data is missing
    if (error || !post) {
        return <h1 className="post-404">404 - Article Not Found: {error}</h1>;
    }

    // Access the fields from the stored 'post' object
    // Assuming 'body' is the Rich Text field ID in Contentful
    const { title, date, body } = post; 

    // --- Final Render ---
    return (
        <div className="blog-post-container">
            <header className="post-header">
                {/* H1 is the primary SEO signal */}
                <h1 className="post-title">{title}</h1> 
                <div className="post-meta">
                    {/* Ensure 'date' field is correctly provided by Contentful */}
                    <time dateTime={date}>🗓️ {new Date(date).toLocaleDateString()}</time>
                </div>
            </header>
            
            <article className="post-body">
                {/* 🎯 The Rich Text rendering is now clean and correct */}
                {body && <RichTextRenderer content={body} />}
                
            </article>
        </div>
    );
};

export default BlogSinglePost;