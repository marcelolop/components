import React from 'react';
import '../assets/styles/index.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // import icons

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-container">
        <ul className="footer-nav">
          <li><a className="footer-nav-item" href="/">Home</a></li>
          <li><a className="footer-nav-item" href="/about">About</a></li>
          <li><a className="footer-nav-item" href="/privacy">Privacy</a></li>
        </ul>
        <div className="footer-contact">
          <p>Contact us at: <a className="footer-contact-email" href="mailto:mflix-contact@mf.com">mflix-contact@mf.com</a></p>
          <ul className="footer-social">
            <li><a className="footer-social-item" href="#"><FaFacebook /></a></li> 
            <li><a className="footer-social-item" href="#"><FaTwitter /></a></li> 
            <li><a className="footer-social-item" href="#"><FaInstagram /></a></li>
          </ul>
        </div>
        <p className='footer-copyright'>&copy; {year}</p>
      </div>
    </footer>
  );
}

export default Footer;