import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Component Imports
import Header from './components/Header/Header.js'; 
import Footer from './components/Footer/Footer.js';

// Page Imports
import Home from './pages/Home.js';
import Properties from './pages/Properties.js'; 
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Blog from './pages/Blog'; 
import InvestmentGuides from './pages/InvestmentGuides';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions'; 

// Dynamic Page Imports
import PropertyDetails from './pages/PropertyDetails'; 
import BlogSinglePost from './pages/BlogSinglePost'; // This handles the Contentful content

import './styles/Global.css'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> 

        <main>
          <Routes>
            
            {/* 1. Static Routes (Top-level pages) */}
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<Properties />} /> 
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            
            {/* 2. Specific Static Routes (Legal/Informational Pages) */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/guides" element={<InvestmentGuides />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/terms" element={<TermsAndConditions />} /> 
            
            {/* 3. Dynamic Routes (Use parameter to fetch content/data) */}
            {/* MUST come AFTER all static routes for /blog and /properties */}
            
            {/* Blog Post Route (Uses :slug from Contentful) */}
            <Route path="/blog/:slug" element={<BlogSinglePost />} /> 
            
            {/* Property Details Route (Uses :id or :slug) */}
            <Route path="/properties/:id" element={<PropertyDetails />} /> 

            {/* 4. The Catch-All Route (MUST BE THE ABSOLUTE LAST ROUTE) */}
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
            
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;