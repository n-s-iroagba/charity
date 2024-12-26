import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css'; // Assuming you will have the styles here

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Left Section: Disclaimer Text */}
        <div className="footer-left">
  <p>
    Your generosity brings hope and healing to those in need. Together, we can make a difference. <br />
    This website operates independently and is not affiliated with or endorsed by any social media platform. 
    All donations are directed toward our mission of providing essential support to affected communities.
  </p>
</div>


        {/* Right Section: Social Media Icons */}
        <div className="footer-right">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </div>

      {/* Centered Links */}
      <div className="footer-links">
        <a href="/contact" className="footer-link">Contact Us</a>
        <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
        <a href="/terms-and-conditions" className="footer-link">Terms & Conditions</a>
      </div>
    </footer>
  );
};

export default Footer;
