import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        {/* 1. Brand and Contact Info */}
        <div className="footer-section brand-info">
          <h3><span style={{ color: '#FFD700' }}>~</span> WealthWave Realty</h3>
          <p>Finding your next wave of wealth through strategic real estate investment.</p>
          <div className="contact-details">
            <p>Plot No.21 & 21A, Sector 142,</p>
            <p>Noida, Uttar Pradesh 201304</p>
            <p>Phone: +91 8770287915</p>
            <p>Email: wealthwaverealty@gmail.com</p>
          </div>
        </div>

        {/* 2. Quick Links (Main Pages) */}
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/properties">Properties</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/guides">Investment Guides</Link></li>
          </ul>
        </div>

        {/* 3. Legal / Resources */}
        <div className="footer-section resources">
          <h3>Resources & Legal</h3>
          <ul>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* 4. Social Media */}
        <div className="footer-section social">
          <h3>Connect</h3>
          <div className="social-links">
            <a href="https://www.facebook.com/profile.php?id=61575852136729" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://www.youtube.com/@wealthwaverealty" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="https://www.instagram.com/wealthwaverealty" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com/company/wealthwave-realty-solutions/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} WealthWave Realty. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
