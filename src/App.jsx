import React, {useState} from 'react';
import appStylesCss from './css/app.module.css';
import InputBar from "./componets/InputBar"; 
import AnimatedButton from "./componets/AnimatedButton";


function App() {
  const [formData, setFormData] = useState({
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: ''
  });
  const handleInputSubmit = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleFormSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <div >
        <h1>Input Bar with Animated Button</h1>
        <form>
          <InputBar className={appStylesCss["input-spaceing"]} placeholder="Enter your m" onSubmit={(value) => handleInputSubmit("1", value)} />
          <InputBar className={appStylesCss["input-spaceing"]} placeholder="Enter your Last" onSubmit={(value) => handleInputSubmit("2", value)} />
          <InputBar className={appStylesCss["input-spaceing"]} placeholder="Enter your name" onSubmit={(value) => handleInputSubmit("3", value)} />
          <InputBar className={appStylesCss["input-spaceing"]} placeholder="Enter your name" onSubmit={(value) => handleInputSubmit("4", value)} />
          <InputBar className={appStylesCss["input-spaceing"]} placeholder="Enter your name" onSubmit={(value) => handleInputSubmit("5", value)} />
          <InputBar className={appStylesCss["input-spaceing"]} placeholder="Enter your name" onSubmit={(value) => handleInputSubmit("6", value)} />
          <AnimatedButton text="suubmit form" onClick={handleFormSubmit} />
        </form>
    </div>
  );
}

export default App;
