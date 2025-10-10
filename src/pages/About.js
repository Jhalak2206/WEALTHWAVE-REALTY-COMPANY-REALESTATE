// File: src/pages/About.js

import React from 'react';
import CEOSection from '../components/CEOSection/CEOSection'; // New component
import logo from '../assets/logo.jpg'; // Import your logo image
import './About.css'; // This will contain the general layout and section styles

// Since your React setup likely uses Header and Footer components globally,
// this file will only contain the main body content (below the Ticker).

const About = () => {
    return (
        <div className="about-page">
            
            {/* Main About Content Section */}
            <section className="about-content-section" id="about-us">
                {/* Image tag converted to React JSX and using the imported logo */}
                <img src={logo} alt="WealthWave Realty Main Logo" className="content-logo" />
                
                <p>Welcome! We are WealthWave Realty, and we believe that finding your dream property should be an exciting journey, not a stressful process. We founded our company on a simple idea: to make luxury real estate feel personal, accessible, and truly rewarding.</p>
                <p>Our team is a unique blend of seasoned professionals and fresh, innovative thinkers. We combine years of experience with smart market insights to help you make confident decisions, whether you're looking for your perfect home or a powerful investment.</p>
                <p>This isn't just about properties; it’s about people. We're here to be your trusted partners every step of the way, providing transparent and honest advice. Our passion is helping you turn your property dreams into a reality and building a legacy you'll be proud of.</p>
            </section>

            {/* CEO Leadership Section - Defined in a separate component */}
            <CEOSection />
            
            {/* Note: Header/Ticker/Footer components are typically rendered in App.js 
                or a Layout component wrapping this entire page. */}
        </div>
    );
};

export default About;