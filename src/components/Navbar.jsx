import React, { useState } from 'react';
import logo from '../assets/nezaweb-logo.png';  // Import the logo

const Navbar = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleNavClick = (sectionId) => {
    closeMenu();
    scrollToSection(sectionId);
  };

  return (
    <header className="header">
      <div className="container nav-container">
        <div className="logo">
          <img 
            src={logo} 
            alt="NezaWeb Logo" 
            className="logo-image"
          />
          <span className="logo-text">
            Neza<span className="logo-accent">Web</span>
          </span>
        </div>
        <button className="mobile-toggle" onClick={toggleMenu} aria-label="Menu">
          <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>
        <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
            Home
          </a>
          <a href="#services" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}>
            Services
          </a>
          <a href="#approach" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('approach'); }}>
            Approach
          </a>
          <a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;