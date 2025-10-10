import React from 'react';
import './TermsAndConditions.css'; 
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div className="tc-container">
            <header className="tc-header">
                <h1>Terms and Conditions</h1>
                <p>Last Updated: October 10, 2025</p>
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
                    <li><strong>No Financial Advice:</strong> The information provided on this Service, including all investment guides, blog posts, and market analysis, is for informational and educational purposes only. It does not constitute financial, legal, or investment advice.</li>
                    <li><strong>Risk Acknowledgment:</strong> Real estate investment involves inherent risks. Wealthwave Realty is not responsible for any investment decisions made based on the information provided on the Service. Users are strongly advised to seek independent professional financial, legal, and tax advice before making any investment decisions.</li>
                    <li><strong>Property Data:</strong> All property listings and details are provided by third-party sellers or developers and are subject to change without notice. We strive for accuracy but do not guarantee the completeness or reliability of listing data.</li>
                </ul>
            </section>

            <section className="tc-section">
                <h2>3. Intellectual Property Rights</h2>
                <ul>
                    <li><strong>Ownership:</strong> Unless otherwise stated, Wealthwave Realty and/or its licensors own the intellectual property rights for all material on the Service, including content models, text, graphics, and code. All intellectual property rights are reserved.</li>
                    <li><strong>License to Use:</strong> You may view and print pages from the Service for your own personal use, subject to the restrictions set out in these Terms.</li>
                    <li><strong>Restrictions:</strong> You must not republish, sell, rent, sub-license, reproduce, duplicate, or copy any material from the Service without express written permission.</li>
                </ul>
            </section>

            <section className="tc-section">
                <h2>4. User Obligations and Conduct</h2>
                <ul>
                    <li><strong>Accuracy of Information:</strong> When using forms on the Service, such as the contact form or the download guide form, you agree to provide true, accurate, current, and complete information.</li>
                    <li><strong>Unlawful Use:</strong> You must not use the Service in any way that causes, or may cause, damage to the Service or impairment of the availability or accessibility of the Service, or in any way which is unlawful, illegal, fraudulent, or harmful.</li>
                    <li><strong>Spam and Abuse:</strong> You must not use the contact form to send unsolicited bulk emails (spam) or engage in malicious activity.</li>
                </ul>
            </section>

            <section className="tc-section">
                <h2>5. Lead Capture and Data Privacy</h2>
                <ul>
                    <li><strong>Data Collection:</strong> By submitting your personal details (Name, Email, Phone) to download investment guides, you explicitly consent to Wealthwave Realty collecting and storing this information.</li>
                    <li><strong>Purpose:</strong> This data is collected to provide you with the requested guide, offer free consultations, and send you relevant updates or marketing communications.</li>
                    <li><strong>Third-Party Services:</strong> We use third-party services (like Formspree) to process and notify us of lead submissions. By submitting data, you acknowledge that your information will be handled in accordance with the third-party provider's privacy policies.</li>
                </ul>
            </section>

            <section className="tc-section">
                <h2>6. Limitation of Liability</h2>
                <p>
                    To the extent permitted by applicable law, Wealthwave Realty will not be liable for any indirect, incidental, special, or consequential damages (including loss of business, revenue, profits, data, or savings) arising out of or related to your use of the Service.
                </p>
            </section>

            <section className="tc-section">
                <h2>7. Governing Law</h2>
                <p>
                    These Terms shall be governed by and construed in accordance with the laws of <strong>India</strong>, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
            </section>

            <section className="tc-section">
                <h2>8. Changes to Terms</h2>
                <p>
                    Wealthwave Realty reserves the right to revise these Terms at any time as it sees fit, and by using this Service, you are expected to review these Terms regularly.
                </p>
            </section>
            
            <section className="tc-section">
                <h2>9. Contact Information</h2>
                <p>
                    If you have any questions about these Terms, please contact us at:
                </p>
                <p>
                    <strong>Email:</strong> wealthwaverealty@gmail.com<br/>
                    <strong>Phone:</strong> +91 8770287915
                </p>
            </section>
        </div>
    );
};

export default TermsAndConditions;