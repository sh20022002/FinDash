import React, { useState } from 'react';
import inputBarCss from '../css/InputBar.module.css'; // Make sure to import the correct CSS file
import AnimatedButton from './AnimatedButton'; // Import your button component

const InputBar = ({ placeholder, buttonText, onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    if (inputValue.trim() !== '') {
      onSubmit(inputValue);
      setInputValue(''); // Clear input after submission
    }
  };

  return (
    <div className={inputBarCss.input-bar-container}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        className={inputBarCss.input-bar}
      />
      <AnimatedButton text={buttonText} onClick={handleClick} />
    </div>
  );
};

export default InputBar;