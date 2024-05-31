import React from 'react';
import '../assets/styles/index.css'; 
import PropTypes from 'prop-types';

function Button({ text, type, onClick }) {
    const buttonClass = type === 'primary' ? 'button-primary' : 'button-secondary';
    return (
      <button className={`${buttonClass} button`} onClick={onClick}>
        {text}
      </button>
    );
  }
  
  Button.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  };
  
  export default Button;