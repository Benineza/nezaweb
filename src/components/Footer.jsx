import React from 'react';
import logo from '../assets/nezaweb-logo.png';  // Import the logo

const Footer = ({ scrollToSection }) => {
  const handleSubscribe = () => {
    const input = document.getElementById('subscribeEmail');
    const emailVal = input?.value.trim();
    if (!emailVal || !emailVal.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }
    alert(`🎉 Thanks for subscribing! ${emailVal} will receive exclusive insights.`);
    if (input) input.value = '';
  };

  return (
    <footer className="footer">
      <div className="container footer-flex">
        <div className="footer-brand">
          <div className="logo footer-logo">
            <img 
              src={logo} 
              alt="NezaWeb Logo" 
              className="footer-logo-image"
            />
            <span className="logo-text">
              Neza<span className="logo-accent">Web</span>
            </span>
          </div>
          <p>Empowering brands through exceptional web development, social media management and digital design.</p>
        </div>
        <div className="footer-links">
          <h4>Explore</h4>
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
          <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a>
          <a href="#approach" onClick={(e) => { e.preventDefault(); scrollToSection('approach'); }}>Approach</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
        </div>
        <div className="footer-links">
          <h4>Services</h4>
          <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Web Development</a>
          <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Social Media Management</a>
          <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Branding & Design</a>
        </div>
        <div className="footer-news">
          <h4>Grow with us</h4>
          <p>Subscribe for insights</p>
          <div className="subscribe-group">
            <input type="email" id="subscribeEmail" placeholder="Your email" />
            <button onClick={handleSubscribe}><i className="fas fa-arrow-right"></i></button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">© 2025 NezaWeb — Digital growth, redefined. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;