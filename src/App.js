import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';
import Chart2 from './components/Chart2';
import Chart3 from "./components/Chart3";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Chart/>
          <Chart2/>
          <Chart3/>
      </div>
    );
  }
}

export default App;
