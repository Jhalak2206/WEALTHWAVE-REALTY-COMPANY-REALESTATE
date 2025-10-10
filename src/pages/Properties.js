// File: src/pages/Properties.js

import React from 'react';
import PropertyCard from '../components/PropertyCard/PropertyCard.js';
import './Properties.css';

// 🛑 STEP 1: IMPORT THE IMAGES
import lntImage from '../assets/lnt-green-reserve.png';
import experionImage from '../assets/experion-elements-7.jpg';
import jacobImage from '../assets/Screenshot 2025-10-08 155133.png';
import modernImage from '../assets/Screenshot 2025-10-08 155232.png';


// 🛑 STEP 2: USE THE IMPORTED VARIABLES IN THE MOCK DATA
export const mockProperties = [
    // BAD: image: 'Gemini_Generated_Image_sz4sgbsz4sgbsz4s.png'
    { id: 1, title: 'L&T Green Reserve', price: 61890600, location: 'Sector 128, Noida', beds: 3, baths: 3, sqft: 2850, image: lntImage }, 
    
    // BAD: image: 'experion-elements-7.jpg' (If this is not the full path)
    { id: 2, title: 'Experion Elements', price: 54900000, location: 'Sector 45, Noida', beds: 3, baths: 3, sqft: 2975, image: experionImage }, 
    
    // BAD: image: 'src\assets\Screenshot 2025-10-08 155133.png'
    { id: 3, title: 'Jacob & Co Residency', price: 90000000, location: 'Sector 97, Noida', beds: 3, baths: 3, sqft: 2500, image: jacobImage }, 
    
    // BAD: image: 'src\assets\Screenshot 2025-10-08 155232.png'
    { id: 4, title: 'Trump Tower', price: 200000000, location: 'Sector 94, Noida', beds: 4, baths: 4, sqft: 5000, image: modernImage },
];


const Properties = () => {
    return (
        <div className="properties-page">
            <div className="page-header">
                <h1>All Exclusive Listings</h1>
                <p>Browse the latest investment-grade properties curated for wealth growth.</p>
            </div>

            <div className="listings-grid">
                {mockProperties.map(property => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </div>
        </div>
    );
};

export default Properties;