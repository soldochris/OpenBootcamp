import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

const WarningNotUsed = () => {
  return <h1>The counter is not already used!</h1>
};

const ListOfClicks = ({clicks})=>{
  return <p>{clicks.join(", ")}</p>
};

const INITIAL_COUNTER_STATE = {
  left: 0,
  right: 0,
  message: 'This is a message inside the state.'
}

const App = () => {
  // const [left, setLeft] = useState(0);
  // const [right,setRight] = useState(0);

  const [counters,setCounters] = useState(INITIAL_COUNTER_STATE);

  const [clicks,setClicks] = useState([]);

  const handleLeft = () =>{
    setCounters({
      ...counters,
      left: counters.left + 1
    });
    setClicks(prevClicks => ([...prevClicks,'L']));
  };

  const handleRight = () => {
    setCounters({
      ...counters,
      right: counters.right + 1
    });
    setClicks(prevClicks => ([...prevClicks,'R']));
  };

  const handleReset = () =>{
    setCounters(INITIAL_COUNTER_STATE);
    setClicks([]);
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
      <br/>
      <button onClick={handleReset}>Reset</button>
      <p>Total number of clicks: {clicks.length}</p>
      <p>{counters.message}</p>
      {clicks.length === 0 ? <WarningNotUsed/> : <ListOfClicks clicks={clicks}/>}
    </div>
  )
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
