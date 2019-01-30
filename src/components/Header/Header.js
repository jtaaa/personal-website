import React, { Component } from 'react';
import './Header.css'

import Toolbar from '../Toolbar/Toolbar';
import { mapLocationToHeaderInfo } from './../../Info';

class Header extends Component {
  constructor(props) {
    super(props);
  
    this.state = { menuOpen: false };
  }

  onMenuToggle(open) {
    this.setState({ menuOpen: open });
  }
  
  render() {
    const { logo, alt, title } = mapLocationToHeaderInfo(this.props.location.pathname);
    return (
      <div className={`Header ${this.state.menuOpen ? 'Header-menu-open' : ''}`}>
        <Toolbar onMenuToggle={this.onMenuToggle.bind(this)}></Toolbar>
        { logo && !this.state.menuOpen &&
        <img className="Header-img" src={logo} alt={alt}/> }
        { title && !this.state.menuOpen &&
        <div className="Header-title">{ title }</div> }
        <div className="Header-underline"></div>
      </div>
    )
  }
}

export default Header;
