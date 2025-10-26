// File: src/pages/BlogSinglePost.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getEntryBySlug } from '../utils/contentfulAPI';
import RichTextRenderer from '../utils/RichTextRenderer';
import { Helmet } from 'react-helmet';
import './BlogSinglePost.css';

const BlogSinglePost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      setError(null);
      const data = await getEntryBySlug(slug);

      if (data) {
        setPost(data);
      } else {
        setError('Article not found.');
      }

      setLoading(false);
    };

    if (slug) fetchPost();
  }, [slug]);

  if (loading) return <h1 className="post-loading">Loading Content...</h1>;
  if (error || !post) return <h1 className="post-404">404 - {error}</h1>;

  const { title, date, body, summary } = post;

  return (
    <div className="blog-post-container">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{title} | WealthWave Realty Blog</title>
        <meta
          name="description"
          content={summary || `Read this article on WealthWave Realty Blog: ${title}`}
        />
        <link rel="canonical" href={`https://wealthwaverealty.in/blog/${slug}`} />
      </Helmet>

      <header className="post-header">
        <h1 className="post-title">{title}</h1>
        <div className="post-meta">
          <time dateTime={date}>🗓️ {new Date(date).toLocaleDateString()}</time>
        </div>
      </header>

      <article className="post-body">
        {body && <RichTextRenderer content={body} />}

        {/* Internal Linking for SEO */}
        <section className="post-internal-links">
          <h3>Explore More</h3>
          <p>
            Interested in premium properties? <Link to="/properties">View our listings</Link> or check out our <Link to="/guides">investment guides</Link>.
          </p>
          <p>
            Learn more <Link to="/about">about WealthWave Realty</Link> or <Link to="/contact">get in touch</Link> today.
          </p>
        </section>
      </article>
    </div>
  );
};

export default BlogSinglePost;
