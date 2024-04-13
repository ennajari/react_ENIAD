import React, { useState } from 'react';
import './App.css';

function App() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };
  
  return (
<<<<<<< HEAD
    <>
      <button className="btn" onClick={handleClick}>Clicked {clickCount} times</button>
    </>
=======
         <>
         <button className="btn" onclick="activateLasers()">Clicked ${n} times</button>
         </>
>>>>>>> 13b7b22044facde4e4d0d3d7fba0e8da102758b7
  );
}
export default App;
