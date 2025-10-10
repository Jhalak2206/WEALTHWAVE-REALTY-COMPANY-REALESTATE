import React from 'react';
import { useLocation } from 'react-router-dom';
import LeadForm from '../components/LeadForm/LeadForm.js'; // Ensure the .js extension is here
import './Contact.css'; // Import the dedicated CSS

const Contact = () => {
    const location = useLocation();
    const inquirySubject = location.state?.inquirySubject;
  return (
    <div className="contact-page">
      <h1>Contact Wealthwave Realty</h1>
      <p>Have questions, ready to book a viewing, or need investment advice? Send us a message!</p>
      
      {/* The main lead generation form */}
      <LeadForm /> 
      
      {/* Optional: Add contact info below the form */}
      <div className="contact-info-details">
        <h3>Our Office</h3>
        <p>Plot No.21 & 21A, Sector 142, Noida, Uttar Pradesh 201304</p>
        <p>Phone: +91 8770287915</p>
      </div>
    </div>
  );
};

export default Contact;