import React, { useState } from 'react';
import inputBarCss from '../css/InputBar.module.css'; // Make sure to import the correct CSS file
import AnimatedButton from './AnimatedButton'; // Import your button component

const InputBar = ({ placeholder, onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className={inputBarCss["input-bar-container"]}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        className={inputBarCss["input-bar"]}
      />
    </div>
  );
};

export default InputBar;