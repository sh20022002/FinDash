import React from 'react';
import AnimatedButtonCss from '../css/AnimatedButton.module.css'; // Import the CSS file for styling

const AnimatedButton = ({ text, onClick, className, ...props }) => {
  return (
    <button className={`${AnimatedButtonCss["animated-button"]} ${className}`} {...props} onClick={onClick}>
      {text}
    </button>
  );
};

export default AnimatedButton;
