import React, { Component } from 'react';
import './App.css';

import LinkList from './LinkList/LinkList';
import linkGroups from './Links';

class App extends Component {
  constructor(props) {
    super (props);

    this.state = { fadedout: true };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ fadedout: false }), 800);
  }
  
  render() {
    return (
      <div className="App">
        <img 
          className={`App-backdrop ${this.state.fadedout ? 'faded-out' : ''}`}
          src="/assets/headshot.jpg"
          alt="Handsome headshot o.O" />
        <div className="App-content">
          <div className="App-title">Joshua Allum</div>
          <div className="App-subtitle">Software Developer</div>
          <div className="App-description">
            <a href="https://www.ibm.com/cloud/" target="_blank" rel="noopener noreferrer">Cloud Platform</a> Developer at <a href="https://www.ibm.com/ca-en/" target="_blank" rel="noopener noreferrer">IBM</a> Toronto Labs.<br/>
            On season 1 episode 18 of <a href="https://www.ctv.ca/This-Is-Us" target="_blank" rel="noopener noreferrer">This is Us</a>.<br/>
          </div>
          <LinkList linkGroups={linkGroups} />
        </div>
      </div>
    );
  }
}

export default App;
