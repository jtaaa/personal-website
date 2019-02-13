import React from 'react';
import { Link } from 'react-router-dom';
import './UserWidget.css';

const UserWidget = ({ photos }) => (
  <div className="UserWidget">
    <div className="UserWidget-prompt-wrapper">
      <Link to="/creator" className="UserWidget-prompt">Creator</Link>
    </div>
    <div className="UserWidget-bubble">
      <img className="UserWidget-photo" src={photos[0]} alt="User profile"/>
    </div>
  </div>
);

export default UserWidget;
