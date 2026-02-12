import React from 'react';

function Contact() {
    return (
        <div className="contact-container">
            <div className="contact-header">
                <h1>Contact Us</h1>
                <p>We’d love to hear from you. Please fill out the form below.</p>
            </div>

            <div className="contact-content">
            
                <div className="contact-info-blocks">
                    <div className="info-item">
                        <h3>Our Showroom</h3>
                        <p>123 Aura Design Avenue,<br/>New York, NY 10001</p>
                    </div>
                    <div className="info-item">
                        <h3>Working Hours</h3>
                        <p>Monday — Friday: 09:00 am - 06:00 pm<br/>Saturday: 10:00 am - 04:00 pm</p>
                    </div>
                    <div className="info-item">
                        <h3>Get in Touch</h3>
                        <p>Email: aura_design@gmail.com<br/>Phone: +1 (215) 602-1310</p>
                    </div>
                </div>

                <form className="contact-form">
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" placeholder="Your name" required />
                    </div>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" placeholder="your@email.com" required />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea placeholder="How can we help you?" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="change">Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;