import React, { Component } from 'react';
import Agthy from 'react-agthy';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the example page of `react-agthy` component</h2>
        </div>
        <p className="App-intro">
          To use the component, click on Agthy component, in the right-bottom corner.
        </p>

        <Agthy />
      </div>
    );
  }
}

export default App;
