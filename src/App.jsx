import React, { useState } from 'react';
import InputBar from "./components/InputBar";
import AnimatedButton from './Components/AnimatedButton';
import appCss from './css/App.module.css'; // Ensure this path is correct
import EntryManager from './components/EntryManager';

function App() {
  const [formData, setFormData] = useState({
    a: '',
    b: '',
    c: '',
    d: '',
    e: '',
    i: ''
  });

  const handleInputChange = (field) => (value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleInputSubmit = (field, value) => {
    console.log('Input submitted:', field, value);
    setFormData({ ...formData, [field]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
  };
  


  return (
    <div className={appCss["container"]}>
      <form onSubmit={handleFormSubmit}>
        <InputBar
          placeholder="pre tax income"
          onChange={handleInputChange("a")}
          onSubmit={(value) => handleInputSubmit("a", value)}
        />
        <InputBar
          placeholder="reatairment contrubution"
          onChange={handleInputChange("b")}
          onSubmit={(value) => handleInputSubmit("b", value)}
        />
        <InputBar
          placeholder="other fix income"
          onChange={handleInputChange("c")}
          onSubmit={(value) => handleInputSubmit("c", value)}
        />
        <InputBar
          placeholder="other fix expense"
          onChange={handleInputChange("d")}
          onSubmit={(value) => handleInputSubmit("d", value)}
        />
        <InputBar
          placeholder="amount of mony in bank"
          onChange={handleInputChange("e")}
          onSubmit={(value) => handleInputSubmit("e", value)}
        />
        <InputBar
          placeholder="debts"
          onChange={handleInputChange("i")}
          onSubmit={(value) => handleInputSubmit("i", value)}
        />
        <AnimatedButton onSubmit={handleFormSubmit} text="submit form" />
      </form>
      <EntryManager/>
    </div>
  );
};
export default App;