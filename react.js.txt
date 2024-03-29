import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Compteur</h1>
      <p>Valeur : {count}</p>
      <button onClick={increment}>Incrémenter</button>
    </div>
  );
}

ReactDOM.render(<Counter />, document.getElementById('root'));
