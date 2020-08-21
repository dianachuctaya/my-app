import React from 'react';
import logo from './logo.svg';
import './App.css';
import SaludoNuevo from './Componets/Nuevosaludo';

function App() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Aprender React JS
       </h1>
       <SaludoNuevo />
      </header>
         
    </div>
  );
}

export default App;
{/* <div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Editando Aqyi <code>src/App.js</code> ISEPHDE.
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
</div> */}