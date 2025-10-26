import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaHome, FaChartLine, FaHandshake } from 'react-icons/fa'; // Added FaHandshake for a fourth icon
import './Home.css';


const Home = () => {
  return (
    <div className="home-page">
      
      {/* 1. Hero Section (Responsive Background, CTA) */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Find Your Next Wave of Wealth.</h1>
          <p>Explore exclusive listings and premier investment opportunities with Wealthwave Realty.</p>
          
          {/* Simple Search/CTA Form */}
          <div className="hero-search-bar">
            <input type="text" placeholder="Enter City, Zip, or Address..." />
            <Link to="/properties" className="search-btn">
              <FaSearch /> Search Listings
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Featured Services Section */}
      <section className="services-section">
        <h2>Why Choose Wealthwave?</h2>
        <div className="service-cards">
          
          {/* Service Card 1: Investment Focus */}
          <div className="service-card">
            <FaChartLine className="service-icon" />
            <h3>Investment Focus</h3>
            <p>We analyze market data to ensure maximum ROI for every property.</p>
          </div>
          
          {/* Service Card 2: Exclusive Listings */}
          <div className="service-card">
            <FaHome className="service-icon" />
            <h3>Exclusive Listings</h3>
            <p>Access off-market and premium properties before they hit the general market.</p>
          </div>
          
          {/* Service Card 3: Expert Guidance */}
          <div className="service-card">
            <FaSearch className="service-icon" />
            <h3>Expert Guidance</h3>
            <p>Our experienced agents guide you through every step, from viewing to closing.</p>
          </div>

          {/* Service Card 4: Partnership */}
          <div className="service-card">
            <FaHandshake className="service-icon" />
            <h3>Lasting Partnership</h3>
            <p>We believe in long-term relationships, offering support even after closing.</p>
          </div>

        </div>
      </section>
      
      {/* 3. Call to Action Banner (Encourage Lead Generation) */}
      <section className="cta-banner">
        <h2>Ready to Invest?</h2>
        <p>Talk to an investment specialist today and start building your real estate portfolio.</p>
        <Link to="/contact" className="cta-btn">
          Get Free Consultation
        </Link>
      </section>

    </div>
  );
};

export default Home;