import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';
import Chart2 from './components/Chart2';
import Chart3 from "./components/Chart3";
import Welcome from "./components/Welcome";
import Graph from "./components/Graph";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
       <Router>
      <div className="App">
          <h1>Utility Data Viewer</h1>
           <Welcome/>

              <Link to="/Graph">
              Graph Display
              </Link>
            <Route path="/Graph"
                 component={Graph}/>



      </div>
       </Router>
    );
  }
}

export default App;
