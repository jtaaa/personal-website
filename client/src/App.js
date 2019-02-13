import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import InfoPage from './pages/InfoPage/InfoPage';
import CreatorPage from './pages/CreatorPage/CreatorPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/info/" render={props => (
              <div>
                <Header></Header>
                <InfoPage location={props.location}></InfoPage>
              </div>
            )}></Route>
            <Route path="/creator" component={CreatorPage}></Route>
            <Route path="/" component={HomePage}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
};

export default App;
