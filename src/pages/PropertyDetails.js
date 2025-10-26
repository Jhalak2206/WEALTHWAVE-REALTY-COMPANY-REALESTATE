// File: src/pages/PropertyDetails.js

import React from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import './PropertyDetails.css';
import { mockProperties } from './Properties'; // Make sure mockProperties is exported in Properties.js
import { Helmet } from "react-helmet";

const PropertyDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate(); 
    const propertyId = parseInt(id);

    const property = mockProperties.find(p => p.id === propertyId);

    if (!property) {
        return <Navigate to="/properties" replace />;
    }

    const formattedPrice = property.price ? 
        `₹${property.price.toLocaleString('en-IN')}` : 
        'Price upon request';

    const handleInquiryClick = () => {
        navigate('/contact', { 
            state: { inquirySubject: `Inquiry about: ${property.title} (ID: ${property.id})` } 
        });
    };

    return (
        <div className="property-details-page">

            {/* SEO Meta Tags */}
            <Helmet>
                <title>{property.title} for Sale in Noida | WealthWave Realty</title>
                <meta 
                  name="description" 
                  content={`Explore ${property.title} located in ${property.location}. Premium investment and residential property in Noida by WealthWave Realty.`} 
                />
                <link rel="canonical" href={`https://wealthwaverealty.in/properties/${property.id}`} />
            </Helmet>

            {/* Header Section */}
            <div className="details-header">
                <h1>{property.title}</h1>
                <p className="details-location">
                    {property.location} | <a href="/properties">Back to all listings</a>
                </p>
            </div>

            {/* Main Details Section */}
            <div className="details-main">
                <div className="details-image-box">
                    <img src={property.image} alt={property.title} className="details-image" />
                    <span className="details-price-tag">{formattedPrice}</span>
                </div>
                
                <div className="details-info-box">
                    <h2>Key Features</h2>
                    <ul className="details-features">
                        <li>Area: {property.sqft} sqft</li>
                        <li>Beds: {property.beds}</li>
                        <li>Baths: {property.baths}</li>
                        <li>Status: New Listing</li>
                        <li>Type: Ultra-Luxury Apartment</li>
                    </ul>
                    
                    <h2>Description</h2>
                    <p className="details-description">
                        This is a detailed description of {property.title}. Experience unparalleled luxury and strategic investment potential in {property.location}. These residences offer world-class amenities, stunning views, and excellent connectivity.
                    </p>

                    {/* CTA with internal linking */}
                    <button 
                        className="contact-agent-cta"
                        onClick={handleInquiryClick}
                    >
                        Inquire About This Property
                    </button>

                    <p className="related-links">
                        Explore more <a href="/properties">properties</a> or learn <a href="/guides">investment strategies</a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetails;
