import React, { useState } from 'react';
import './InvestmentGuides.css'; 
import { Link } from 'react-router-dom';
import DownloadFormModal from '../components/DownloadFormModal'; 
// Note: You must still create the DownloadFormModal component 
// and its CSS (as provided in the previous step) for this page to function correctly.


// MOCK DATA for the guides (You would connect this to Contentful later)
const guideData = [
    {
       
    id: 1,
    title: "Market Analysis and Identifying High-Potential Areas: The NCR's Growth Corridors",
    summary: "Beyond the fundamentals: A strategic guide to key indicators (job growth, infrastructure, population shifts) for identifying top investment zones. **Special focus on the appreciation impact of the Noida International Airport (Jewar) and upcoming regional infrastructure projects.**",
    category: "Strategic Market Analysis",
    fileName: "Market_Analysis_NCR_Growth_Corridors.pdf", 
    downloadCount: 1240,
    tags: ["Jewar Airport", "NCR Real Estate", "Investment Zones", "Growth Metrics"]
      },
    {
    id: 2,
    title: "Financing and Managing Your Investment: From Loan Approval to Cash Flow",
    summary: "A practical guide detailing the investor's financing options (conventional, portfolio, bridge loans), how to accurately calculate your **Return on Investment (ROI)**, and essential property management strategies (self-management vs. professional services).",
    category: "Finance & Operations",
    fileName: "Financing_and_Managing_Your_Investment.pdf", // Specific to financing and management
    downloadCount: 985, // Suggested count
    tags: ["Real Estate Financing", "Property Management", "ROI Calculation", "Investor Loans"]
    },
    {
    id: 4, // Assuming IDs 1, 2, and 3 are for the prior topics, or adjust as necessary
    title: "Wealth Building and Exit Strategies: Scaling Your Portfolio and Maximizing Tax Efficiency",
    summary: "Master the art of long-term real estate success. This guide covers scaling techniques like the **BRRRR Strategy**, effective **tax deferral methods (1031 Exchange)**, portfolio diversification, and strategic plans for selling to maximize capital gains.",
    category: "Advanced Strategies & Legacy Planning",
    fileName: "Wealth_Building_and_Exit_Strategies.pdf",
    downloadCount: 750, // Suggested count for an advanced topic
    tags: ["BRRRR Strategy", "1031 Exchange", "Capital Gains", "Portfolio Scaling", "Tax Planning"]
    }
];

const InvestmentGuides = () => {
    // STATE: Controls the modal visibility and which guide was selected
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedGuide, setSelectedGuide] = useState(null);

    const handleDownloadClick = (guide) => {
        // Sets the guide data and opens the modal to capture lead information
        setSelectedGuide(guide);
        setIsModalOpen(true);
    };

    const handleDownloadSuccess = () => {
        // Called by the modal after the form is submitted and download is initiated
        setIsModalOpen(false);
        alert('Download started! Please check your downloads folder.');
        // In a live app, you would also trigger analytics tracking here
    };

    return (
        <div className="guides-page-container">
            <header className="guides-hero">
                <h1 className="guides-title">Exclusive Investment Guides</h1>
                <p className="guides-subtitle">
                    Access our premium, research-backed reports to make strategic real estate decisions in Noida and Greater Noida.
                </p>
            </header>

            <section className="guides-list">
                {guideData.map(guide => (
                    <div className="guide-card" key={guide.id}>
                        <div className="guide-card-content">
                            <span className="guide-category">{guide.category}</span>
                            <h2 className="guide-card-title">{guide.title}</h2>
                            <p className="guide-card-summary">{guide.summary}</p>
                            
                            {/* This anchor tag triggers the modal */}
                            <a 
                                href="#" 
                                className="guide-download-btn" 
                                onClick={(e) => {
                                    e.preventDefault(); 
                                    handleDownloadClick(guide);
                                }}
                            >
                                Download Guide $\rightarrow$
                            </a>
                        </div>
                        <div className="guide-meta">
                            <span>Downloads: {guide.downloadCount.toLocaleString()}</span>
                        </div>
                    </div>
                ))}
            </section>
            
            <section className="guides-cta">
                <h3>Need Personalized Advice?</h3>
                <p>Talk to our wealth specialist today for a consultation tailored to your investment goals.</p>
                {/* Assuming /contact is the correct route to your contact page */}
                <Link to="/contact" className="guides-contact-btn">
                    Get Free Consultation
                </Link>
            </section>
            
            {/* Renders the modal only when a guide is selected and the modal is set to open */}
            {isModalOpen && selectedGuide && (
                <DownloadFormModal
                    guideTitle={selectedGuide.title}
                    selectedGuide={selectedGuide} // Pass the full guide object
                    onDownloadSuccess={handleDownloadSuccess}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </div>
    );
};

export default InvestmentGuides;