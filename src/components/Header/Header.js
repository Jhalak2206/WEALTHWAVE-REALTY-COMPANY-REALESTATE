import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  // State to manage the visibility of the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  // Function to close the menu after a link is clicked (mobile view)
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container"> 
      {/* Logo and Home Link */}
      <Link to="/" className="header-logo" onClick={closeMenu}>
        <span className="logo-wave">~</span>Wealthwave Realty
      </Link>
      
      {/* Hamburger Icon (Visible only on mobile) */}
      <button className="menu-icon" onClick={toggleMenu}>
        {isOpen ? '✖' : '☰'} 
      </button>

      {/* Navigation Menu */}
      {/* The 'active' class is added/removed based on the 'isOpen' state for responsiveness */}
      <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <ul className="nav-list">
          
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
          </li>
          
          <li className="nav-item">
            <Link to="/properties" className="nav-link" onClick={closeMenu}>Properties</Link>
          </li>
          
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={closeMenu}>About Us</Link>
          </li>
          
          <li className="nav-item">
            {/* The Contact link gets the special button style */}
            <Link 
              to="/contact" 
              className="nav-link nav-contact-btn" 
              onClick={closeMenu}
            >
              Contact Us
            </Link>
          </li>
          
        </ul>
      </nav>
      </div>
      
    </header>
  );
};

// 🎯 FIX: The essential default export that App.js needs
export default Header;