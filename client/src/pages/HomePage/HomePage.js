import React, { Component } from 'react';
import './HomePage.css';

import LinkList from '../../components/LinkList/LinkList';
import linkGroups from '../../Links';

class HomePage extends Component {
  constructor(props) {
    super (props);

    this.state = { fadedout: true, splash: '' };
  }

  async getNewSplash() {
    fetch('/api/splash')
      .then(res => res.json())
      .then(splash => {
        this.setState({ splash })
      })
      .catch(err => {
        this.setState({ splash: err.toString() });
      });
  }

  componentDidMount() {
    setTimeout(() => this.setState({ fadedout: false }), 800);
    this.getNewSplash();
  }
  
  render() {
    return (
      <div className="HomePage">
        <img 
          className={`HomePage-backdrop ${this.state.fadedout ? 'faded-out' : ''}`}
          src="/assets/headshot.jpg"
          alt="Handsome headshot o.O" />
        <div className="HomePage-content">
          <div className="HomePage-title">Joshua Allum</div>
          <div className="HomePage-subtitle">Software Developer</div>
          <div className="HomePage-description">
            <a href="https://www.ibm.com/cloud/" target="_blank" rel="noopener noreferrer">Cloud Platform</a> Developer at <a href="https://www.ibm.com/ca-en/" target="_blank" rel="noopener noreferrer">IBM</a> Toronto Labs.<br/>
            { this.state.splash }<br/>
          </div>
          <LinkList linkGroups={linkGroups} />
        </div>
      </div>
    );
  }
}

export default HomePage;
