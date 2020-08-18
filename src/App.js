import React from 'react';
import logo from './logo.svg';
import './App.css';
//import Square from './Square.js';
//import SimpleSquare from './SimpleSquare.js';
import Exercisesquare from './excercisesquare.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Exercisesquare color="red" size={50} />       
      <Exercisesquare initialColor="green" size={100} />
      <Exercisesquare initialColor="red" size={200} />
    </div>
    //showTItle = {true/false} | you can insert this command after Square above if you want to use boolean
  );
}

export default App;
