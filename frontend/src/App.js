import React, { useState } from 'react';
import './global.css';

import Routes from './routes'

/**
 * Contador:
 *  let [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }
  return (
    <div>
      <Header>
        Contador: {counter}
      </Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
 */


function App() {
  return (
    <div>
      <Routes/>
    </div>
  );
}

export default App;
