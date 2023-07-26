import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = (props) => {
  const [counterValue, updateCounter] = useState(0);

  // const handleClickIncrease = () => {
  //   updateCounter(counterValue + 1);
  // };
  // const handleClickDecrease = () => {
  //   updateCounter(counterValue - 1);
  // };
  // const handleClickReset = () => {
  //   updateCounter(0);
  // };


  const isEven = counterValue % 2 === 0;
  const message = isEven ? "is even" : "is odd";

  return (
    <div>
      <h1>{counterValue}</h1>
      <p>{message}</p> 
      <button onClick={()=>{updateCounter(counterValue + 1)}}>
        Increase
      </button>
      <button onClick={()=>{updateCounter(counterValue - 1)}}>
        Decrease
      </button>
      <button onClick={()=>{updateCounter(0)}}>
        Reset
      </button>
    </div>
  )
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
