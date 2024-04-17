import React, { useState } from 'react';
import './App.css';

function App() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };
  
  return (
    <>
      <button className="btn" onClick={handleClick}>Clicked {clickCount} times</button>
    </>
  );
}

export default App;
