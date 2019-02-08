import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Toolbar.css';

import MenuButton from '../MenuButton/MenuButton';

class Toolbar extends Component {
  render() {
    return (
      <div className="Toolbar">
        <MenuButton {...this.props}></MenuButton>
        <Link to="/" className="Toolbar-title">Joshua Allum</Link>
        <div></div>
      </div>
    )
  }
}

export default Toolbar;
