import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = (props) => {
  const [counterValue, updateCounter] = useState(1);

  const handleClick = () => {
    updateCounter(counterValue + 1);
  }

  return (
    <div>
      <h1>{counterValue}</h1>
      <button onClick={handleClick}>
        Increase
        </button>
    </div>
  )
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
