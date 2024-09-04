import React, {useState, useEffect}  from "react";
 // Ensure this path is correct
import InputBar from "./InputBar";
// import AnimatedButton from  "./AnimatedButton";
import addFrameObjCss from "../css/addFrameObj.module.css";
import AnimatedButtonCss from "../css/AnimatedButton.module.css";




function AddFrameObj({onSubmit, onChange}) {
    const [inputValue, setInputValue] = useState(placeholder);

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

    const handleClick = () => {
        onSubmit(inputValue);
        let value = inputValue;
        setInputValue(placeholder);
        console.log(value);
      };
    return (
        <div className={addFrameObjCss['add-frame-obj-container']}>
            <InputBar
                type="text" 
                placeholder="Add Revanue / Expense..." 
                onChange={(value) => setInputValue(value)} 
                className={addFrameObjCss['add-frame-obj']}
            />
            <AnimatedButton onClick={handleClick} text="Add Expense" className={AnimatedButtonCss['expenses']}></AnimatedButton>
            <AnimatedButton onClick={handleClick} text="Add Revanue" className={AnimatedButtonCss['revanue']}></AnimatedButton>
        </div>
    );
}
export default AddFrameObj;