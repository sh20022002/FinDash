import React, { useState } from 'react';
import styles from '../css/inputBar.module.css'; // Ensure this path is correct

function InputBar({ placeholder, onSubmit, onChange}) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const handleClick = () => {
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <div className={styles['input-bar-container']}>
      <input 
        type="text" 
        placeholder={placeholder} 
        value={inputValue} 
        onChange={handleChange} 
        className={styles['input-bar']}
      />
    </div>
  );
}

export default InputBar;