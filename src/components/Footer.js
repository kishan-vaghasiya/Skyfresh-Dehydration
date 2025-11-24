import React from 'react';
import './Footer.css';
import { imgPath } from '../assets';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src={imgPath.logo1} alt="SkyTech Food Export" className="footer-logo-img" />
              <span>SkyFresh Dehydration</span>
            </div>
            <p className="footer-description">
              Leading exporter of premium food products to 50+ countries worldwide. 
              Quality, reliability, and excellence in every shipment.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <span className="social-icon">📘</span>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <span className="social-icon">💼</span>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <span className="social-icon">📷</span>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <span className="social-icon">🐦</span>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#shipping">Shipping</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Products</h3>
            <ul className="footer-links">
              <li><a href="#products">Onion Powder</a></li>
              <li><a href="#products">Garlic Powder</a></li>
              <li><a href="#products">Premium Chips</a></li>
              <li><a href="#contact">Custom Orders</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="contact-info">
              <p>📧 skyfresh@gmail.com</p>
              <p>📍 Ahemdabad,Gujarat</p>
              <p>🌍 Exporting to 50+ countries</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 SkyTech Food Export. All rights reserved.</p>
          <p>Made with ❤️ for global food excellence</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
