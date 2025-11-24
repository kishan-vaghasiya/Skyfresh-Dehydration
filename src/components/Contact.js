import React, { useState } from 'react';
import './Contact.css';
import ScrollAnimation from './ScrollAnimation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        product: '',
        quantity: '',
        message: ''
      });
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus('');
      }, 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">Get in touch for your food export needs</p>
        </div>

        <div className="contact-content">
          {/* Contact Information */}
          <ScrollAnimation animation="fade-in-left" delay={0.1}>
            <div className="contact-info">
              <ScrollAnimation animation="fade-in-up" delay={0.2}>
                <div className="contact-card">
                  <div className="contact-icon">👥</div>
                  <h3>Contact Persons</h3>
                  <div className="contact-details">
                    <p><strong>Kishan Vaghasiya</strong></p>
                    <p><strong>Harsh Gadhesariya</strong></p>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-in-up" delay={0.3}>
                <div className="contact-card">
                  <div className="contact-icon">📧</div>
                  <h3>Email</h3>
                  <div className="contact-details">
                    <a href="mailto:skytechinternational@gmail.com" className="email-link">
                      skytechinternational@gmail.com
                    </a>
                  </div>
                </div>
              </ScrollAnimation>

              <div className="contact-card no-effect sky title-black">
                <div className="contact-icon">📍</div>
                <h3>Address</h3>
                <div className="contact-details">
                  <p>Ahemdabad</p>
                  <p>Gujarat, India</p>
                </div>
              </div>

              <div className="contact-card no-effect sky title-black">
                <div className="contact-icon">🌍</div>
                <h3>Global Reach</h3>
                <div className="contact-details">
                  <p>Exporting to 50+ countries</p>
                  <p>Worldwide shipping available</p>
                  <p>Quality assured products</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Inquiry Form */}
          <ScrollAnimation animation="fade-in-right" delay={0.2}>
            <div className="inquiry-form-container">
              <div className="form-header">
                <h3>Send Inquiry</h3>
                <p>Fill out the form below and we'll get back to you within 24 hours</p>
              </div>

            <form onSubmit={handleSubmit} className="inquiry-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter your company name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="product">Product Interest *</label>
                  <select
                    id="product"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a product</option>
                    <option value="onion-powder">Onion Powder</option>
                    <option value="garlic-powder">Garlic Powder</option>
                    <option value="premium-chips">Premium Chips</option>
                    <option value="all-products">All Products</option>
                    <option value="custom">Custom Requirements</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="quantity">Quantity Required</label>
                  <select
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                  >
                    <option value="">Select quantity</option>
                    <option value="small">Small (1-10 tons)</option>
                    <option value="medium">Medium (10-50 tons)</option>
                    <option value="large">Large (50-100 tons)</option>
                    <option value="bulk">Bulk (100+ tons)</option>
                    <option value="custom">Custom Quantity</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Please provide details about your requirements, delivery timeline, and any specific quality standards..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  'Send Inquiry'
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="success-message">
                  ✅ Thank you! Your inquiry has been sent successfully. We'll contact you soon.
                </div>
              )}
            </form>
            </div>
          </ScrollAnimation>
        </div>

        {/* Map Section */}
        <div className="map-section">
          <h3>Our Location</h3>
          <div className="map-container">
            <div className="map-placeholder">
              <div className="map-icon">🗺️</div>
              <p>Ahemdabad, Gujarat</p>
              <p>India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
