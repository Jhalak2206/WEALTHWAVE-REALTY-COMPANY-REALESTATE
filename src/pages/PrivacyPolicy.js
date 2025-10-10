import React from 'react';
import './PrivacyPolicy.css'; // You should create this CSS file next!

const PrivacyPolicy = () => {
  return (
    <div className="privacy-page">
      <header className="privacy-header">
        <h1 className="privacy-title">Privacy Policy</h1>
        <p className="privacy-subtitle">Last Updated: October 9, 2025</p>
      </header>

      <main className="privacy-content">
        <p>This Privacy Policy describes how **Wealthwave Realty** ("we," "us," or "our") collects, uses, and discloses information that we obtain about visitors to our website (wealthwaverealty.com) and the services available through our site.</p>

        <section className="policy-section">
          <h2>1. Information We Collect</h2>
          <p>We collect information directly from you, automatically through your use of our website, and from third-party sources.</p>

          <h3>A. Information Collected Directly from You</h3>
          <p>We collect information when you voluntarily provide it to us, such as when you:</p>
          <ul>
            <li>Use the **"Get Free Consultation"** button or contact form.</li>
            <li>Subscribe to our market blog or insights newsletter.</li>
            <li>Contact us via email or phone.</li>
          </ul>
          <p>This information may include:</p>
          <ul>
            <li>**Contact Information:** Name, email address, phone number.</li>
            <li>**Consultation Details:** Property interests, investment budget, location preferences, and any other information you choose to provide.</li>
          </ul>

          <h3>B. Information Collected Automatically</h3>
          <p>We automatically collect the following types of information about your use of our website through cookies and other tracking technologies:</p>
          <ul>
            <li>**Usage Data:** Pages viewed, time spent on our site, links clicked, and your interactions with our content.</li>
            <li>**Device Data:** IP address, browser type, operating system, and unique device identifiers.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect for the following business purposes:</p>
          <ul>
            <li>**To Provide Services:** To fulfill your requests, such as scheduling consultations, responding to inquiries, and providing requested property listings.</li>
            <li>**Marketing and Communications:** To send you our market blog, investment guides, promotional materials, and information about properties we believe may interest you.</li>
            <li>**Website Improvement:** To understand how users access and use our website, and to improve our website's performance and design.</li>
            <li>**Legal Compliance:** To comply with applicable legal obligations, including responding to legal processes and requests.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>3. Disclosure of Your Information</h2>
          <p>We will not sell or rent your personal information to third parties. We may disclose your information to the following entities:</p>
          <ul>
            <li>**Service Providers:** Third-party vendors and consultants who perform services on our behalf, such as email delivery services, website hosting, and analytics providers.</li>
            <li>**Business Partners (Real Estate):** Trusted real estate agents, legal counsel, or financial advisors who assist us in providing the specific services or properties you request.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>4. Cookies and Tracking Technologies</h2>
          <p>We use cookies (small files placed on your device) to collect information automatically. You have the option to accept or decline cookies. Most web browsers automatically accept cookies, but this may prevent you from taking full advantage of the website.</p>
        </section>

        <section className="policy-section">
          <h2>5. Your Rights and Choices</h2>
          <ul>
            <li>**Marketing Opt-Out:** You may opt-out of marketing emails by following the unsubscribe instructions contained within the email.</li>
            <li>**Access/Correction:** You may request access to the personal information we hold about you by contacting us directly.</li>
          </ul>
        </section>

        <section className="policy-section contact-section">
          <h2>6. Contact Us</h2>
          <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
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