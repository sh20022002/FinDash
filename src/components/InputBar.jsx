import React, { useState, useEffect } from 'react';
import styles from '../css/inputBar.module.css'; // Ensure this path is correct

function InputBar({ placeholder, onSubmit, onChange, className, ...props }) {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (!localStorage) {
      return;
    }
    const savedValue = localStorage.getItem('inputValue');
    if (savedValue) {
      setInputValue(savedValue);
    }
  }, []);

  // Update the localStorage when the input value changes
  useEffect(() => {
    if (!localStorage) {
      return;
    }
    localStorage.setItem('inputValue', inputValue);
  }, [inputValue]);

  const handleChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <div className={`${styles['input-bar-container']} ${className}`} {...props}>
      <input 
        type="text" 
        placeholder={placeholder} 
        value={inputValue} 
        onChange={handleChange} 
        className={`${styles['input-bar']} ${className}`} {...props}
        />
    </div>
  );
}

export default InputBar;