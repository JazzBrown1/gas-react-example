import React from 'react';
import './App.css';
import HelloWorld from './HelloWorld';

const App = () => (
  <div className="App">
    <header className="App-header">
      <b>Google App Scripts - React App</b>
      <p>
        <HelloWorld />
      </p>
      <a
        className="App-link"
        href="https://github.com/zennbrown/gas-react"
        target="_blank"
        rel="noopener noreferrer"
      >
        Check out our GitHub
      </a>
    </header>
  </div>
);

export default App;
