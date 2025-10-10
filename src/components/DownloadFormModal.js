import React, { useState } from 'react';
import './DownloadFormModal.css'; 

const DownloadFormModal = ({ guideTitle, selectedGuide, onDownloadSuccess, onClose }) => {
    // 🚨 UNIQUE FORMSPREE ENDPOINT IS NOW SET HERE
    const formspreeEndpoint = "https://formspree.io/f/mldpwwrl"; 

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);

    const triggerDownload = (fileName) => {
        // Path starts with '/' to access files in the public folder
        const pdfUrl = `/${fileName}`; 
        window.location.href = pdfUrl; 
        onDownloadSuccess(); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const leadData = {
            name: name,
            _replyto: email, // Formspree uses _replyto to enable reply-back
            phone: phone,
            guide_downloaded: guideTitle,
            guide_filename: selectedGuide.fileName, 
            timestamp: new Date().toISOString()
        };

        // --- 1. POST Data to Formspree ---
        fetch(formspreeEndpoint, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                // Optional: If you use Formspree's client-side validation
                'Accept': 'application/json'
            },
            body: JSON.stringify(leadData)
        })
        .then(response => {
            // Check if Formspree accepted the submission (status 200/204)
            if (response.ok) {
                // SUCCESS: Lead saved & email triggered. Now start download.
                triggerDownload(selectedGuide.fileName);
            } else {
                // FAILURE: Log and notify user if the submission failed (e.g., rate limit)
                console.error("Formspree submission failed. Status:", response.status);
                alert('Error submitting lead data. Please try again or contact us directly.');
            }
        })
        .catch(error => {
            // NETWORK ERROR: Handle issues like no internet connection
            console.error('Network Error:', error);
            alert('A network error occurred. Please check your connection.');
        })
        .finally(() => {
            // Stop loading indicator regardless of success or failure
            setLoading(false);
        });
    };

    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <button className="modal-close-btn" onClick={onClose}>&times;</button>
                <h3>Get Your Free Guide:</h3>
                <h2 className="modal-guide-title">{guideTitle}</h2>

                <p>Please provide your details for instant download and a free consultation opportunity.</p>

                <form onSubmit={handleSubmit} className="download-form">
                    <input 
                        type="text" 
                        placeholder="Your Name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                    <input 
                        type="email" 
                        placeholder="Your Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    <input 
                        type="tel" 
                        placeholder="Your Phone Number" 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)} 
                        required 
                    />
                    <button type="submit" disabled={loading}>
                        {loading ? 'Processing...' : 'Download Now'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default DownloadFormModal;