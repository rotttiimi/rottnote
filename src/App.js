import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <input type="text" />
          <button type="button" onClick={addNote}>Add note</button>
        </p>
      </div>
    );
  }
}

function addNote() {
  let noteText = document.querySelector("input").value;
  console.log(noteText);
};

export default App;
