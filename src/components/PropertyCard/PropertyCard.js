// File: src/components/PropertyCard/PropertyCard.js

import React from 'react';
// 🛑 Ensure you have installed react-icons: npm install react-icons
import { Link } from 'react-router-dom';
import { FaBed, FaBath, FaMapMarkerAlt, FaRulerCombined } from 'react-icons/fa';
import './PropertyCard.css'; // Import dedicated styling

// The component accepts a 'property' object as a prop
const PropertyCard = ({ property }) => {
    // Use a placeholder image if no image is provided
    const imageUrl = property.image || 'https://via.placeholder.com/400x300?text=Wealthwave+Listing';

    // Function to format the price (e.g., adds commas or currency symbol)
    // Assuming the price is in USD and is a number, based on the previous code.
    const formattedPrice = property.price ? 
        `₹${property.price.toLocaleString('en-IN')}` : // 'en-IN' ensures correct comma separation (e.g., 1,00,000)
        'Price upon request';

    return (
        <div className="property-card">
            
            <div className="card-image-container">
                {/* Image uses the imported URL from Properties.js */}
                <img src={imageUrl} alt={property.title} className="card-image" />
                
                {/* Price tag positioned over the image */}
                <span className="card-price">{formattedPrice}</span> 
            </div>

            <div className="card-info">
                {/* Title and Location */}
                <h3>{property.title}</h3>
                <p className="card-location">
                    <FaMapMarkerAlt className="icon-map" /> {property.location}
                </p>

                {/* Property Details (Beds, Baths, Size) */}
                <div className="card-details">
                    <div className="detail-item">
                        <FaBed className="detail-icon" /> <span>{property.beds} Beds</span>
                    </div>
                    <div className="detail-item">
                        <FaBath className="detail-icon" /> <span>{property.baths} Baths</span>
                    </div>
                    <div className="detail-item">
                        <FaRulerCombined className="detail-icon" /> <span>{property.sqft} sqft</span>
                    </div>
                </div>
      <Link to={`/properties/${property.id}`} className="card-cta">
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default PropertyCard;