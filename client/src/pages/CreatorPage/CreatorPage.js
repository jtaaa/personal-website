import React, { Component } from 'react';
import './CreatorPage.css';
import UserWidget from '../../components/UserWidget/UserWidget';

class CreatorPage extends Component {
  constructor(props) {
    super (props);

    this.state = {
      user: {},
    };
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
    this.getUser();
  }
  
  render() {
    return (
      <div className="CreatorPage">
        <div className="CreatorPage-widget-wrapper">
          <UserWidget {...this.state.user}
            prompts={[{
              name: 'home',
              title: 'Home',
              href: '/',
            }]} />
        </div>
        <div className="CreatorPage-content-wrapper">
          <div className="Page-divider"></div>
          <div className="CreatorPage-content">
          </div>
        </div>
      </div>
    );
  }
}

export default CreatorPage;
