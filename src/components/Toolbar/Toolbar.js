import React, { Component } from 'react';
import './Toolbar.css';

import MenuButton from '../MenuButton/MenuButton';

class Toolbar extends Component {
  render() {
    return (
      <div className="Toolbar">
        <MenuButton {...this.props}></MenuButton>
        <div className="Toolbar-title">Joshua Allum</div>
      </div>
    )
  }
}

export default Toolbar;
