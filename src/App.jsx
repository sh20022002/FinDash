import React, { useState } from 'react';
import InputBar from "./components/InputBar";
import AnimatedButton from './Components/AnimatedButton';
import appCss from './css/App.module.css'; // Ensure this path is correct
import AddFrameObj from './components/addFrameObj';

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
          placeholder="a"
          onChange={handleInputChange("a")}
          onSubmit={(value) => handleInputSubmit("a", value)}
        />
        <InputBar
          placeholder="b"
          onChange={handleInputChange("b")}
          onSubmit={(value) => handleInputSubmit("b", value)}
        />
        <InputBar
          placeholder="c"
          onChange={handleInputChange("c")}
          onSubmit={(value) => handleInputSubmit("c", value)}
        />
        <InputBar
          placeholder="d"
          onChange={handleInputChange("d")}
          onSubmit={(value) => handleInputSubmit("d", value)}
        />
        <InputBar
          placeholder="e"
          onChange={handleInputChange("e")}
          onSubmit={(value) => handleInputSubmit("e", value)}
        />
        <InputBar
          placeholder="i"
          onChange={handleInputChange("i")}
          onSubmit={(value) => handleInputSubmit("i", value)}
        />
        <AnimatedButton text="submit form" />
      </form>
      <AddFrameObj
        onChange={handleInputChange("a")}
        onSubmit={(value) => handleInputSubmit("a", value)}
      />
    </div>
  );
}

export default App;