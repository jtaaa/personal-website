import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Header.css'

import Toolbar from '../Toolbar/Toolbar';
import { mapLocationToHeaderInfo } from './../../Info';

class Header extends Component {
  render() {
    const { logo, alt, title } = mapLocationToHeaderInfo(this.props.location.pathname);
    return (
      <div className="Header">
        <Toolbar></Toolbar>
        { logo &&
        <img className="Header-img" src={logo} alt={alt}/> }
        { title &&
        <div>
          <div className="Header-title">{ title }</div>
          <div className="Header-underline"></div>
        </div> }
      </div>
    )
  }
}

export default withRouter(Header);
