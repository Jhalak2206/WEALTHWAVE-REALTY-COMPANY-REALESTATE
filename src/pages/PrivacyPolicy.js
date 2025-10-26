// File: src/pages/PrivacyPolicy.js

import React from 'react';
import './PrivacyPolicy.css';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-page">
      
      {/* SEO meta tags */}
      <Helmet>
        <title>Privacy Policy | WealthWave Realty</title>
        <meta 
          name="description" 
          content="Read WealthWave Realty's Privacy Policy to understand how we collect, use, and protect your data while providing premium real estate services in Noida and Greater Noida." 
        />
        <link rel="canonical" href="https://wealthwaverealty.in/privacy-policy" />
      </Helmet>

      <header className="privacy-header">
        <h1 className="privacy-title">Privacy Policy</h1>
        <p className="privacy-subtitle">Last Updated: October 9, 2025</p>
      </header>

      <main className="privacy-content">
        <p>This Privacy Policy describes how <strong>Wealthwave Realty</strong> ("we," "us," or "our") collects, uses, and discloses information that we obtain about visitors to our website (<Link to="/">wealthwaverealty.in</Link>) and the services available through our site.</p>

        <section className="policy-section">
          <h2>1. Information We Collect</h2>
          <p>We collect information directly from you, automatically through your use of our website, and from third-party sources.</p>

          <h3>A. Information Collected Directly from You</h3>
          <p>We collect information when you voluntarily provide it, such as when you:</p>
          <ul>
            <li>Use the <Link to="/contact">"Get Free Consultation"</Link> button or contact form.</li>
            <li>Subscribe to our <Link to="/blog">market blog</Link> or insights newsletter.</li>
            <li>Contact us via email or phone.</li>
          </ul>
          <p>This information may include:</p>
          <ul>
            <li><strong>Contact Information:</strong> Name, email, phone number.</li>
            <li><strong>Consultation Details:</strong> Property interests, investment budget, location preferences, and other information you provide.</li>
          </ul>

          <h3>B. Information Collected Automatically</h3>
          <p>We automatically collect data via cookies and tracking technologies:</p>
          <ul>
            <li><strong>Usage Data:</strong> Pages viewed, time spent, clicks, and interactions.</li>
            <li><strong>Device Data:</strong> IP address, browser, OS, and unique device identifiers.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>2. How We Use Your Information</h2>
          <ul>
            <li><strong>To Provide Services:</strong> Fulfilling requests, scheduling consultations, and providing property listings.</li>
            <li><strong>Marketing & Communications:</strong> Sending blog updates, investment guides, promotions, and property info.</li>
            <li><strong>Website Improvement:</strong> Understanding usage patterns to improve performance and design.</li>
            <li><strong>Legal Compliance:</strong> Responding to legal requests and obligations.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>3. Disclosure of Your Information</h2>
          <p>We will not sell or rent your personal information. Disclosures may occur to:</p>
          <ul>
            <li><strong>Service Providers:</strong> Vendors who perform services like hosting, analytics, or email delivery.</li>
            <li><strong>Business Partners:</strong> Trusted real estate agents, legal counsel, or financial advisors.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>4. Cookies and Tracking Technologies</h2>
          <p>We use cookies to collect information automatically. You may accept or decline cookies, though declining may limit some website features.</p>
        </section>

        <section className="policy-section">
          <h2>5. Your Rights and Choices</h2>
          <ul>
            <li><strong>Marketing Opt-Out:</strong> Unsubscribe via links in emails.</li>
            <li><strong>Access/Correction:</strong> Contact us to request your personal information.</li>
          </ul>
        </section>

        <section className="policy-section contact-section">
          <h2>6. Contact Us</h2>
          <p>If you have questions about this Privacy Policy or our practices, reach out to us:</p>
          <address className="contact-details">
            <p><strong>Wealthwave Realty</strong></p>
            <p>Plot No. 21 & 21A, Sector 142, Noida, Uttar Pradesh 201304</p>
            <p>Email: <a href="mailto:wealthwaverealty@gmail.com">wealthwaverealty@gmail.com</a></p>
            <p>Phone: +91 8770287915</p>
          </address>
        </section>
        
      </main>
    </div>
  );
};

export default PrivacyPolicy;
