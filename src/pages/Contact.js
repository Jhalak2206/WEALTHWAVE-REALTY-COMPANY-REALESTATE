// File: src/pages/Contact.js

import React from 'react';
import { Link } from 'react-router-dom';
import LeadForm from '../components/LeadForm/LeadForm.js';
import './Contact.css';
import { Helmet } from "react-helmet";

const Contact = () => {
    
    

    return (
        <div className="contact-page">
            
            {/* SEO Meta Tags */}
            <Helmet>
                <title>Contact WealthWave Realty | Real Estate Experts in Noida</title>
                <meta name="description" content="Get in touch with WealthWave Realty for property inquiries, viewings, and investment advice. Our experts are ready to help you find your perfect property." />
                <link rel="canonical" href="https://wealthwaverealty.in/contact" />
            </Helmet>

            <h1>Contact WealthWave Realty</h1>
            <p>
                Have questions, ready to book a viewing, or need investment advice? Send us a message! Learn more <Link to="/about">about our company</Link> or check our <Link to="/properties">available properties</Link>.
            </p>
            
            {/* Lead Generation Form */}
            <LeadForm /> 
            
            {/* Contact Info */}
            <div className="contact-info-details">
                <h3>Our Office</h3>
                <p>Plot No.21 & 21A, Sector 142, Noida, Uttar Pradesh 201304</p>
                <p>Phone: +91 8770287915</p>
                <p>Email: <a href="mailto:wealthwaverealty@gmail.com">wealthwaverealty@gmail.com</a></p>
            </div>

            <p>
                Also, explore our <Link to="/guides">investment guides</Link> and <Link to="/blog">market insights</Link> for informed decisions.
            </p>
        </div>
    );
};

export default Contact;
