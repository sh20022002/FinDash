import React from 'react';
import AnimatedButtonCss from '../css/AnimatedButton.module.css'; // Import the CSS file for styling

const AnimatedButton = ({ text, onClick }) => {
  return (
    <button className={AnimatedButtonCss.animated-button} onClick={onClick}>
      {text}
    </button>
  );
};

export default AnimatedButton;
