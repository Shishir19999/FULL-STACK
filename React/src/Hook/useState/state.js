import React, { useState } from 'react';
import './App.css';

const StateTutorial = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button
        className="button"
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        decrement
      </button>
      <br></br>
      <br></br>
      {counter}
      <br />
      <br />
      <button
        className="button"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        increment
      </button>
    </div>
  );
};

export default StateTutorial;
