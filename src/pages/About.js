// File: src/pages/About.js

import React from 'react';
import CEOSection from '../components/CEOSection/CEOSection'; 
import logo from '../assets/logo.jpg'; 
import './About.css'; 
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="about-page">
            
            {/* SEO Meta Tags */}
            <Helmet>
                <title>About WealthWave Realty | Real Estate Experts in Noida</title>
                <meta name="description" content="Learn about WealthWave Realty, your trusted property partner in Noida offering premium residential and commercial spaces. Discover luxury homes and investment opportunities." />
                <link rel="canonical" href="https://wealthwaverealty.in/about" />
            </Helmet>

            {/* Main About Content Section */}
            <section className="about-content-section" id="about-us">
                <img src={logo} alt="WealthWave Realty Main Logo" className="content-logo" />
                
                <p>
                    Welcome! We are WealthWave Realty, and we believe that finding your dream property should be an exciting journey, not a stressful process. We founded our company on a simple idea: to make luxury real estate feel personal, accessible, and truly rewarding.
                </p>
                <p>
                    Our team is a unique blend of seasoned professionals and fresh, innovative thinkers. We combine years of experience with smart market insights to help you make confident decisions, whether you're looking for your <Link to="/properties">perfect home or investment</Link>.
                </p>
                <p>
                    This isn't just about properties; it’s about people. We're here to be your trusted partners every step of the way, providing transparent and honest advice. Our passion is helping you turn your property dreams into a reality and building a legacy you'll be proud of. Learn more about our <Link to="/guides">investment guides</Link> or read our <Link to="/blog">latest blog insights</Link>.
                </p>
                <p>
                    Ready to start your journey? <Link to="/contact">Contact our experts today</Link>.
                </p>
            </section>

            {/* CEO Leadership Section */}
            <CEOSection />

        </div>
    );
};

export default About;
