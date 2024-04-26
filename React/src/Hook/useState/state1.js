import React, { useState } from 'react';
import './App.css';

const StateTutorial = () => {
  const [inputValue, setInputValue] = useState('pedro');
  return (
    <div>
      <input
        placeholder="bdfjdbfj"
        onChange={(event) => {
          const newValue = event.target.value;
          setInputValue(newValue);
        }}
      ></input>
      {inputValue}
    </div>
  );
};
export default StateTutorial;
