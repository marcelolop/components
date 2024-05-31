import React from 'react';
import '../assets/styles/index.css';
import Button from './Button';

function Header() {
    return (
      <header className="header">
        <div className="container header-content">
         <h1 className="header-title">MFlix</h1>
          <nav className="header-nav">
            <ul className="nav-list">
              <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
              <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
              <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
              <li className="nav-item"><a href="/help" className="nav-link">Help</a></li>
            </ul>
          </nav>
          <div className="header-buttons">
            <Button text="Login" type="primary" className="header-button" />
            <Button text="Sign Up" type="secondary" className="header-button" />
          </div>
        </div>
      </header>
    );
  }

export default Header;