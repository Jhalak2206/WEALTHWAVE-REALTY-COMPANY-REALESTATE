// File: src/pages/PropertyDetails.js

import React from 'react';
import { useParams, Navigate, useNavigate  } from 'react-router-dom';
import './PropertyDetails.css'; // New CSS file
// 🛑 You must import the mock data here to find the details
import { mockProperties } from './Properties'; 
// NOTE: You must export mockProperties in Properties.js for this to work!

const PropertyDetails = () => {
    // 1. Get the 'id' from the URL
    const { id } = useParams();
    const navigate = useNavigate(); 
    // Convert the ID to a number (URLs give strings)
    const propertyId = parseInt(id);

    // 2. Find the property details in the mock data
    const property = mockProperties.find(p => p.id === propertyId);

    // 3. Handle case where property is not found (e.g., redirect to 404 or properties list)
    if (!property) {
        // Navigate component is a good way to redirect from JSX
        return <Navigate to="/properties" replace />;
    }

    // Function to format price (repeated for consistency)
    const formattedPrice = property.price ? 
        `₹${property.price.toLocaleString('en-IN')}` : 
        'Price upon request';

    const handleInquiryClick = () => {
          navigate('/contact', { 
            state: { 
                inquirySubject: `Inquiry about: ${property.title} (ID: ${property.id})`
            } 
        });
     };


    return (
        <div className="property-details-page">
            <div className="details-header">
                <h1>{property.title}</h1>
                <p className="details-location">{property.location}</p>
            </div>
            
            <div className="details-main">
                <div className="details-image-box">
                    <img src={property.image} alt={property.title} className="details-image" />
                    <span className="details-price-tag">{formattedPrice}</span>
                </div>
                
                <div className="details-info-box">
                    <h2>Key Features</h2>
                    <ul className="details-features">
                        <li>Area: {property.sqft} sqft</li>
                        {/* Add more mock details here */}
                        <li>Status: New Listing</li>
                        <li>Type: Ultra-Luxury Apartment</li>
                    </ul>
                    
                    <h2>Description</h2>
                    <p className="details-description">
                        This is a placeholder for the full description of {property.title}. Experience unparalleled luxury and strategic investment potential in Sector {property.location.split(',')[0].split(' ')[1]}. These residences offer world-class amenities and stunning views.
                    </p>
                    <button 
                        className="contact-agent-cta"
                        onClick={handleInquiryClick} // Add the click handler
                    >
                        Inquire About This Property 
                    </button>
                    
                </div>
            </div>
        </div>
    );
};

export default PropertyDetails;