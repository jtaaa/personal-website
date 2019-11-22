import React, { Component } from 'react';
import './HomePage.css';

import LinkList from '../../components/LinkList/LinkList';
import linkGroups from '../../Links';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = { fadedout: true };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ fadedout: false }), 800);
  }

  render() {
    return (
      <div className="HomePage">
        <img
          className={`HomePage-backdrop ${
            this.state.fadedout ? 'faded-out' : ''
          }`}
          src="/assets/headshot.jpg"
          alt="Handsome headshot o.O"
        />
        <div className="HomePage-content">
          <div className="HomePage-title">Joshua Allum</div>
          <div className="HomePage-subtitle">Software Developer</div>
          <div className="HomePage-description">
            <a
              href="https://www.ibm.com/cloud/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cloud Platform
            </a>{' '}
            Developer at{' '}
            <a
              href="https://www.ibm.com/ca-en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              IBM
            </a>{' '}
            Toronto Labs.
            <br />
            On season 1 episode 18 of{' '}
            <a
              href="https://www.ctv.ca/This-Is-Us"
              target="_blank"
              rel="noopener noreferrer"
            >
              This is Us
            </a>
            .<br />
          </div>
          <LinkList linkGroups={linkGroups} />
        </div>
      </div>
    );
  }
}

export default HomePage;
