import React from 'react';
import './App.css';
import { getSavedData } from 'shared-data';

const header = {
  backgroundColor: '#282c34',
  height: 150,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 'calc(10px + 2vmin)',
  color: 'white',
};

const link = {
  color: '#61dafb',
};

function App() {
  return (
    <div className="App">
      <header style={header}>Navigation {getSavedData()}</header>
      <nav>
        <ul>
          <li>
            <a
              href="/"
              style={link}
              onClick={(evt) => {
                const { history } = window;
                const path = evt.currentTarget.value;

                evt.preventDefault();
                history.pushState({}, undefined, '/');
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/react"
              style={link}
              onClick={(evt) => {
                const { history } = window;
                const path = evt.currentTarget.value;

                evt.preventDefault();
                history.pushState({}, undefined, '/react');
              }}
            >
              react
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
