import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import GlobalStyles from 'utils/styled-components/GlobalStyles';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import InfoPage from './pages/InfoPage/InfoPage';

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <Router>
          <div className="App">
            <Switch>
              <Route
                path="/info/"
                render={props => (
                  <div>
                    <Header />
                    <InfoPage location={props.location} />
                  </div>
                )}
              />
              <Route path="/" component={HomePage} />
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
