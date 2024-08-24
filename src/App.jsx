import React from 'react';
import styles from './css/styles.module.css';
import InputBar from "./componets/InputBar"; 


function App() {
  const handleInputSubmit = (value) => {
    console.log('Input submitted:', value);
  };

  return (
    <div className={styles["app"]} >
      <h1>Input Bar with Animated Button</h1>      
      <InputBar 
        placeholder="Enter something..."
        buttonText="Submit"
        onSubmit={handleInputSubmit}
      />
    </div>
  );
}

export default App;