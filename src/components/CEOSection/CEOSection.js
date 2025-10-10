// File: src/components/CEOSection/CEOSection.js

import React from 'react';
import './CEOSection.css'; 

// 🛑 STEP 1: Import the image files.
// The variable names (anshulImg, kritikImg) will hold the correct path React needs.
import anshulImg from '../../assets/DSC01086.JPG'; 
import kritikImg from '../../assets/WhatsApp Image 2025-09-20 at 14.54.32.jpeg'; 

const CEOSection = () => {
    return (
        <section className="ceo-section">
            <h2>From Our Leadership</h2>
            <div className="ceo-container">
                
                <div className="ceo-card clearfix">
                    {/* 🛑 STEP 2: Use the imported variable in the src attribute */}
                    <img src={anshulImg} alt="Anshul Patel - Co-Founder & CEO" />
                    <h3>Anshul Patel</h3>
                    <span className="title">Co-Founder & CEO</span>
                    <p>"We founded WealthWave Realty on a simple principle: to redefine luxury real estate by merging timeless elegance with data-driven investment strategy. We don't just sell homes; we build legacies."</p>
                </div>
                
                <div className="ceo-card clearfix">
                    {/* 🛑 STEP 2: Use the imported variable in the src attribute */}
                    <img src={kritikImg} alt="Kritik Singh - Co-Founder & CEO" />
                    <h3>Kritik Singh</h3>
                    <span className="title">Co-Founder & CEO</span>
                    <p>"Our vision is to provide a seamless, transparent experience for our clients. Every transaction is a partnership, and our commitment is to your prosperity, ensuring every move you make is a strategic one."</p>
                </div>
                
            </div>
        </section>
    );
};

export default CEOSection;