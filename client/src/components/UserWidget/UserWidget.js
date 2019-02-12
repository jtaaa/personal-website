import React, { Component } from 'react';
import './UserWidget.css';

class UserWidget extends Component {
  constructor(props) {
    super(props);
  
    this.state = {

    };
  }

  render() {
    return (
      <div className="UserWidget">
        <img className="UserWidget-photo" src={this.props.photos[0]} alt="User profile"/>
      </div>
    );
  }
}

export default UserWidget;
