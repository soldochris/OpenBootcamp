import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  // const [left, setLeft] = useState(0);
  // const [right,setRight] = useState(0);

  const [counters,setCounters] = useState({
    left: 0,
    right: 0,
    clicks: 0,
    message: 'This is a message inside the state.'
  });

  const handleLeft = () =>{
    setCounters({
      ...counters,
      left: counters.left + 1,
      clicks: counters.clicks + 1
    });
  };

  const handleRight = () => {
    setCounters({
      ...counters,
      right: counters.right + 1,
      clicks: counters.clicks + 1
    });
  };

  return (
    <div>
      {counters.left}
      <button onClick={handleLeft}>
        left
      </button>
      {counters.right}
      <button onClick={handleRight}>
        right
      </button>
      <p>Total number of clicks: {counters.clicks}</p>
      <p>{counters.message}</p>
    </div>
  )
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
