/**
File: contact.jsx
Student Name: Ian Villanueva
Student ID: 301293286
*/

import React, { useState } from 'react';
import './App.css';

const Contact = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = '/';
    };

    return (
        <div className='contact-container'>
            <div style={{ flex: 1, marginRight: '20px' }}>
                <h2>Contact Information:</h2>
                <p>
                    <strong>Address:</strong> 123 Main Street, Cityville<br />
                    <strong>Email:</strong> info@example.com<br />
                    <strong>Phone:</strong> +1 (555) 123-4567<br />
                </p>
            </div>

            <div style={{ flex: 1 }}>
                <h2>Contact Form:</h2>
                 <form onSubmit={handleSubmit}>
                <div className="input-container">
                        <label htmlFor="firstName">First Name:</label>        
                        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
            
                    </div>

                    <div className="input-container">
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                    </div>

                    <div className="input-container">
                        <label htmlFor="contactNumber">Contact Number:</label>
                        <input type="tel" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
                    </div>

                    <div className="input-container">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>

                    <div className="input-container">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
                    </div>

                    <div className="input-container">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
