import React, { useState } from 'react';
import './App.css';

function App(){
  const [count,SetCount]=useState(0);
  const HandCleck = () => {
    SetCount(count+1);
  }
  return (
    <>
    <button className='btn' onClick = {HandCleck}>Clicked {count}</button>
    </>
  );
}

export default App;