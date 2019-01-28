import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={HomePage}></Route>
            <Route path="/" component={Header}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
};

export default App;
