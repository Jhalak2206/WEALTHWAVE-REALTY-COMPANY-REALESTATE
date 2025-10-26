// File: src/pages/TermsAndConditions.js

import React from 'react';
import './TermsAndConditions.css'; 
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

const TermsAndConditions = () => {
    return (
        <div className="tc-container">

            {/* SEO Meta Tags */}
            <Helmet>
                <title>Terms and Conditions | WealthWave Realty</title>
                <meta 
                    name="description" 
                    content="Read the Terms and Conditions for using WealthWave Realty services, including lead capture, data privacy, and investment disclaimers." 
                />
                <link rel="canonical" href="https://wealthwaverealty.in/terms" />
            </Helmet>

            <header className="tc-header">
                <h1>Terms and Conditions</h1>
                <p>Last Updated: October 10, 2025</p>
                <p>
                    Return to <Link to="/">Home</Link> or explore <Link to="/privacy-policy">Privacy Policy</Link> for more details.
                </p>
            </header>

            <section className="tc-section">
                <h2>1. Agreement to Terms</h2>
                <p>
                    By accessing and using the Wealthwave Realty website (the "Service"), you agree to be bound by these Terms and Conditions ("Terms"). If you disagree with any part of the terms, you must not access the Service.
                </p>
            </section>

            <section className="tc-section">
                <h2>2. Investment Disclaimer</h2>
                <ul>
                    <li><strong>No Financial Advice:</strong> The information provided on this Service, including all <Link to="/guides">investment guides</Link>, <Link to="/blog">blog posts</Link>, and market analysis, is for informational and educational purposes only.</li>
                    <li><strong>Risk Acknowledgment:</strong> Real estate investment involves inherent risks. Wealthwave Realty is not responsible for any investment decisions made based on the information provided. Users are advised to seek independent professional advice before making investments.</li>
                    <li><strong>Property Data:</strong> All listings are provided by developers and are subject to change without notice.</li>
                </ul>
            </section>

            <section className="tc-section">
                <h2>3. Intellectual Property Rights</h2>
                <ul>
                    <li><strong>Ownership:</strong> Wealthwave Realty owns all intellectual property unless otherwise stated.</li>
                    <li><strong>License to Use:</strong> You may view and print pages for personal use only.</li>
                    <li><strong>Restrictions:</strong> No republishing, selling, or duplicating content without permission.</li>
                </ul>
            </section>

            <section className="tc-section">
                <h2>4. User Obligations and Conduct</h2>
                <ul>
                    <li><strong>Accuracy of Information:</strong> You agree to provide true and accurate information when using forms such as <Link to="/contact">contact forms</Link> or download forms.</li>
                    <li><strong>Unlawful Use:</strong> You must not misuse the Service or engage in illegal or harmful activity.</li>
                    <li><strong>Spam and Abuse:</strong> Do not send unsolicited bulk emails via our forms.</li>
                </ul>
            </section>

            <section className="tc-section">
                <h2>5. Lead Capture and Data Privacy</h2>
                <ul>
                    <li><strong>Data Collection:</strong> By submitting personal details, you consent to Wealthwave Realty collecting this information.</li>
                    <li><strong>Purpose:</strong> To provide guides, offer consultations, and send relevant updates.</li>
                    <li><strong>Third-Party Services:</strong> We use third-party providers to process leads, who handle data according to their privacy policies.</li>
                </ul>
            </section>

            <section className="tc-section">
                <h2>6. Limitation of Liability</h2>
                <p>
                    Wealthwave Realty is not liable for indirect, incidental, special, or consequential damages arising from your use of the Service.
                </p>
            </section>

            <section className="tc-section">
                <h2>7. Governing Law</h2>
                <p>
                    These Terms are governed by the laws of <strong>India</strong>. All disputes shall be under the jurisdiction of Indian courts.
                </p>
            </section>

            <section className="tc-section">
                <h2>8. Changes to Terms</h2>
                <p>
                    Wealthwave Realty may revise these Terms at any time. Users should review them regularly.
                </p>
            </section>
            
            <section className="tc-section">
                <h2>9. Contact Information</h2>
                <p>
                    For questions about these Terms or the Service, contact us:
                </p>
                <p>
                    <strong>Email:</strong> <a href="mailto:wealthwaverealty@gmail.com">wealthwaverealty@gmail.com</a><br/>
                    <strong>Phone:</strong> +91 8770287915<br/>
                    Learn more about our <Link to="/privacy-policy">Privacy Policy</Link> or <Link to="/contact">Contact Us</Link> directly.
                </p>
            </section>
        </div>
    );
};

export default TermsAndConditions;
