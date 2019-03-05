import React, { Component } from 'react';
import './CreatorPage.css';

import UserWidget from './../../components/UserWidget/UserWidget';
import ProjectInfo from './../../components/ProjectInfo/ProjectInfo';

class CreatorPage extends Component {
  constructor(props) {
    super (props);

    this.state = {
      project: {},
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

  async getCreatorProject() {
    fetch('/api/project/creator?populate=all')
      .then(res => {
        if (!res.ok) {
          throw Error('It seems I couldn\'t find the creator project.');
        }
        return res.json();
      })
      .then(project => this.setState({ project }))
      .catch(err => process.env.REACT_APP_ENV === 'development' || err.message === undefined ?
          console.error(err)
        : console.log(err.message)
      );
  }

  componentDidMount() {
    this.getUser();
    this.getCreatorProject();
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
            <ProjectInfo {...this.state.project} />
          </div>
        </div>
      </div>
    );
  }
}

export default CreatorPage;
