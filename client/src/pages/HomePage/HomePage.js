import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './HomePage.css';

import LinkList from '../../components/LinkList/LinkList';
import linkGroups from '../../Links';

import { ClassSet } from '../../utils/templateLiteralTags';
import UserWidget from '../../components/UserWidget/UserWidget';

class HomePage extends Component {
  constructor(props) {
    super (props);

    this.state = {
      fadedout: true,
      splash: '',
      user: {},
      hiddenButtonState: 'hidden',
    };
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

  async getUser() {
    fetch('/api/user')
      .then(res => {
        if (!res.ok) {
          throw Error('You aren\'t logged in, but that\'s okay!');
        }
        return res.json();
      })
      .then(user => this.setState({ user }))
      .catch(err => process.env.REACT_APP_ENV === 'development' || err.message === undefined ?
          console.error(err)
        : console.log(err.message)
      );
  }

  componentDidMount() {
    setTimeout(() => this.setState({ fadedout: false }), 800);
    this.getNewSplash();
    this.getUser();
  }

  onHiddenButtonPress() {
    switch (this.state.hiddenButtonState) {
      case 'hidden':  return this.setState({ hiddenButtonState: 'shown' });
      case 'shown':
      default:        this.setState({ hiddenButtonState: 'hidden' });
                      window.location.href = '/api/auth/google';
    }
  }
  
  render() {
    return (
      <div className="HomePage">
        <img 
          className={`HomePage-backdrop ${this.state.fadedout ? 'faded-out' : ''}`}
          src="/assets/headshot.jpg"
          alt="Handsome headshot o.O" />
        <div className="HomePage-content">
          { this.state.user._id ?
              <UserWidget {...this.state.user} 
                prompts={[{
                  name: 'creator',
                  title: 'Creator',
                  href: '/creator',
                }]} />
            : <div 
                className={ClassSet`HomePage-login ${this.state.hiddenButtonState}`}
                onClick={this.onHiddenButtonPress.bind(this)}>
                Hidden Login Button
              </div> }
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

export default withRouter(HomePage);
