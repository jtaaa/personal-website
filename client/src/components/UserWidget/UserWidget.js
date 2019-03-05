import React from 'react';
import { Link } from 'react-router-dom';
import './UserWidget.css';

const UserWidget = ({ photos = [], prompts = [] }) => (
  <div className="UserWidget">
    <div className="UserWidget-prompt-wrapper">
      { prompts.map(prompt => (
      <Link key={prompt.name} to={prompt.href} className="UserWidget-prompt">{ prompt.title }</Link> ))}
    </div>
    <div className="UserWidget-bubble">
      <img className="UserWidget-photo" src={photos[0]} alt="User profile"/>
    </div>
  </div>
);

export default UserWidget;
