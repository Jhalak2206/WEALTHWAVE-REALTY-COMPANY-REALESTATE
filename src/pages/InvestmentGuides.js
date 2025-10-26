// File: src/pages/InvestmentGuides.js

import React, { useState } from 'react';
import './InvestmentGuides.css'; 
import { Link } from 'react-router-dom';
import DownloadFormModal from '../components/DownloadFormModal'; 
import { Helmet } from "react-helmet";

// MOCK DATA for guides
const guideData = [
    {
        id: 1,
        title: "Market Analysis and Identifying High-Potential Areas: The NCR's Growth Corridors",
        summary: "Beyond the fundamentals: A strategic guide to key indicators (job growth, infrastructure, population shifts) for identifying top investment zones. Special focus on the appreciation impact of the Noida International Airport (Jewar) and upcoming regional infrastructure projects.",
        category: "Strategic Market Analysis",
        fileName: "Market_Analysis_NCR_Growth_Corridors.pdf", 
        downloadCount: 1240,
        tags: ["Jewar Airport", "NCR Real Estate", "Investment Zones", "Growth Metrics"]
    },
    {
        id: 2,
        title: "Financing and Managing Your Investment: From Loan Approval to Cash Flow",
        summary: "A practical guide detailing financing options, ROI calculation, and property management strategies (self-managed vs professional).",
        category: "Finance & Operations",
        fileName: "Financing_and_Managing_Your_Investment.pdf",
        downloadCount: 985,
        tags: ["Real Estate Financing", "Property Management", "ROI Calculation", "Investor Loans"]
    },
    {
        id: 4,
        title: "Wealth Building and Exit Strategies: Scaling Your Portfolio and Maximizing Tax Efficiency",
        summary: "Master long-term real estate success. Covers BRRRR strategy, 1031 Exchange, portfolio diversification, and capital gains strategies.",
        category: "Advanced Strategies & Legacy Planning",
        fileName: "Wealth_Building_and_Exit_Strategies.pdf",
        downloadCount: 750,
        tags: ["BRRRR Strategy", "1031 Exchange", "Capital Gains", "Portfolio Scaling", "Tax Planning"]
    }
];

const InvestmentGuides = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedGuide, setSelectedGuide] = useState(null);

    const handleDownloadClick = (guide) => {
        setSelectedGuide(guide);
        setIsModalOpen(true);
    };

    const handleDownloadSuccess = () => {
        setIsModalOpen(false);
        alert('Download started! Please check your downloads folder.');
    };

    return (
        <div className="guides-page-container">
            
            {/* SEO Meta Tags */}
            <Helmet>
                <title>Investment Guides | WealthWave Realty</title>
                <meta 
                    name="description" 
                    content="Access WealthWave Realty's exclusive investment guides for strategic real estate decisions in Noida and Greater Noida. Learn market analysis, ROI, and wealth-building strategies." 
                />
                <link rel="canonical" href="https://wealthwaverealty.in/guides" />
            </Helmet>

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
                            <button
                                type="button" 
                                className="guide-download-btn" 
                                onClick={() => { 
                                    handleDownloadClick(guide);
                                }}
                            >
                                Download Guide &rarr;
                            </button>
                        </div>
                        <div className="guide-meta">
                            <span>Downloads: {guide.downloadCount.toLocaleString()}</span>
                        </div>
                    </div>
                ))}
            </section>
            
            {/* Call-to-Action */}
            <section className="guides-cta">
                <h3>Need Personalized Advice?</h3>
                <p>
                    Talk to our wealth specialist today for a consultation tailored to your investment goals. Also explore our <Link to="/properties">property listings</Link> or read our <Link to="/blog">latest articles</Link>.
                </p>
                <Link to="/contact" className="guides-contact-btn">
                    Get Free Consultation
                </Link>
            </section>
            
            {/* Modal */}
            {isModalOpen && selectedGuide && (
                <DownloadFormModal
                    guideTitle={selectedGuide.title}
                    selectedGuide={selectedGuide}
                    onDownloadSuccess={handleDownloadSuccess}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </div>
    );
};

export default InvestmentGuides;
