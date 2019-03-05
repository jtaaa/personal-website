import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import InfoPage from './pages/InfoPage/InfoPage';
import PlatformPage from './pages/PlatformPage/PlatformPage';
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
            <Route path="/platform" component={PlatformPage} />
            <Route path="/creator" component={CreatorPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </Router>
    );
  }
};

export default App;
