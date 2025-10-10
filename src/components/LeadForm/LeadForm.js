import React, { useState } from 'react';
import './LeadForm.css'; // Assuming you have a CSS file for the form

// 🛑 IMPORTANT: Replace 'yourUniqueHashID' with your actual Formspree endpoint ID
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mldpwwrl';

const LeadForm = ({ defaultInquiryText }) => {
    // State to manage the form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        inquiry: defaultInquiryText || '',
    });

    // State to track submission status
    const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'

    // Handle input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Handle form submission using async/await for fetch
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                // Optional: Clear the form fields after success
                setFormData({ name: '', email: '', phone: '', inquiry: '' });
            } else {
                // Formspree provides error messages in the response body if applicable
                setStatus('error');
            }
        } catch (error) {
            console.error('Submission failed:', error);
            setStatus('error');
        }
    };

    // --- Conditional Rendering based on Status ---

    if (status === 'success') {
        return (
            <div className="lead-form-success">
                <h2>Thank You!</h2>
                <p>Your inquiry has been successfully sent to a Wealthwave agent. We will contact you shortly.</p>
                <button 
                    onClick={() => setStatus('idle')} 
                    className="reset-btn"
                >
                    Submit Another Inquiry
                </button>
            </div>
        );
    }

    return (
        <div className="lead-form-container">
            <form onSubmit={handleSubmit}>
                
                <label htmlFor="name">Full Name</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name" 
                    required 
                    disabled={status === 'submitting'}
                />

                <label htmlFor="email">Email Address*</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com" 
                    required 
                    disabled={status === 'submitting'}
                />
                
                <label htmlFor="phone">Phone Number</label>
                <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567" 
                    disabled={status === 'submitting'}
                />
                
                <label htmlFor="inquiry">Your Inquiry</label>
                <textarea 
                    id="inquiry" 
                    name="inquiry" 
                    rows="6" 
                    value={formData.inquiry}
                    onChange={handleChange}
                    placeholder="I am interested in..."
                    disabled={status === 'submitting'}
                ></textarea>
                
                {status === 'error' && (
                    <p className="error-message">Submission failed. Please try again later.</p>
                )}

                <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={status === 'submitting'}
                >
                    {status === 'submitting' ? 'Sending...' : 'Submit Inquiry'}
                </button>
            </form>
        </div>
    );
};

export default LeadForm;
