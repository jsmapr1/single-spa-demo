import React, { useReducer } from 'react';
import Data from './Data';

function App() {
  const [showData, toggleData] = useReducer(state => !state, true);
  return (
    <div className="App">
      <h1>Hello, World. I'm in React</h1>
      {showData &&
      <Data />
      }
      <button onClick={toggleData}>Toggle Data</button>
    </div>
  );
}

export default App;
