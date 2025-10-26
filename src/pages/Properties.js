// File: src/pages/Properties.js

import React from 'react';
import PropertyCard from '../components/PropertyCard/PropertyCard.js';
import './Properties.css';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';

// Import property images
import lntImage from '../assets/lnt-green-reserve.png';
import experionImage from '../assets/experion-elements-7.jpg';
import jacobImage from '../assets/Screenshot 2025-10-08 155133.png';
import modernImage from '../assets/Screenshot 2025-10-08 155232.png';

// Mock property data
export const mockProperties = [
    { id: 1, title: 'L&T Green Reserve', price: 61890600, location: 'Sector 128, Noida', beds: 3, baths: 3, sqft: 2850, image: lntImage }, 
    { id: 2, title: 'Experion Elements', price: 54900000, location: 'Sector 45, Noida', beds: 3, baths: 3, sqft: 2975, image: experionImage }, 
    { id: 3, title: 'Jacob & Co Residency', price: 90000000, location: 'Sector 97, Noida', beds: 3, baths: 3, sqft: 2500, image: jacobImage }, 
    { id: 4, title: 'Trump Tower', price: 200000000, location: 'Sector 94, Noida', beds: 4, baths: 4, sqft: 5000, image: modernImage },
];

const Properties = () => {
    return (
        <div className="properties-page">
            
            {/* SEO Meta Tags */}
            <Helmet>
                <title>Properties for Sale in Noida | WealthWave Realty</title>
                <meta 
                  name="description" 
                  content="Browse premium residential and commercial properties in Noida with WealthWave Realty. Find your ideal home or investment opportunity with expert guidance." 
                />
                <link rel="canonical" href="https://wealthwaverealty.in/properties" />
            </Helmet>

            {/* Page Header */}
            <div className="page-header">
                <h1>All Exclusive Listings</h1>
                <p>
                    Browse the latest investment-grade properties curated for wealth growth. Learn more <Link to="/about">about our expertise</Link>, check out our <Link to="/guides">investment guides</Link>, or explore <Link to="/blog">market insights</Link>.
                </p>
                <p>
                    Interested in a property? <Link to="/contact">Contact our team</Link> today.
                </p>
            </div>

            {/* Property Listings Grid */}
            <div className="listings-grid">
                {mockProperties.map(property => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </div>

        </div>
    );
};

export default Properties;
