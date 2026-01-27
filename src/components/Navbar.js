import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { imgPath } from '../assets';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container"> 
          <div className="nav-logo">
            <img src={imgPath.logo1} alt="SkyfreshDehydration" className="logo" />
          </div>
          <div className="nav-menu">
            <a href="#home" className="nav-link" onClick={closeMobileMenu}>Home</a>
            <a href="#about" className="nav-link" onClick={closeMobileMenu}>About</a>
            <a href="#certifications" className="nav-link" onClick={closeMobileMenu}>Quality</a>
            <a href="#products" className="nav-link" onClick={closeMobileMenu}>Products</a>
            <a href="#testimonials" className="nav-link" onClick={closeMobileMenu}>Gallery</a>
            <a href="#shipping" className="nav-link" onClick={closeMobileMenu}>Shipping</a>
            <a href="#contact" className="nav-link" onClick={closeMobileMenu}>Contact</a>
            {/* <a href="/brochure.pdf" download className="nav-link" onClick={closeMobileMenu}>Download Brochure</a> */}
          </div>
          <div 
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <a href="#home" className="nav-link" onClick={closeMobileMenu}>Home</a>
        <a href="#about" className="nav-link" onClick={closeMobileMenu}>About</a>
        <a href="#certifications" className="nav-link" onClick={closeMobileMenu}>Quality</a>
        <a href="#products" className="nav-link" onClick={closeMobileMenu}>Products</a>
        <a href="#testimonials" className="nav-link" onClick={closeMobileMenu}>Gallery</a>
        <a href="#shipping" className="nav-link" onClick={closeMobileMenu}>Shipping</a>
        <a href="#contact" className="nav-link" onClick={closeMobileMenu}>Contact</a>
        {/* <a href="/brochure.pdf" download className="nav-link" onClick={closeMobileMenu}>Download Brochure</a> */}
      </div>
    </>
  );
};

export default Navbar;
