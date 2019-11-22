import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { withRouter } from 'react-router-dom';
import './Header.css';

import Toolbar from '../Toolbar/Toolbar';
import { mapLocationToHeaderInfo, headerInfo } from './../../Info';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { menuOpen: false };
  }

  onMenuToggle() {
    this.setState(state => ({ menuOpen: !state.menuOpen }));
  }

  navigateTo(name) {
    this.props.history.push(`/info/${name}`);
    this.setState({ menuOpen: false });
  }

  render() {
    const { logo, alt, title, pos, href } = mapLocationToHeaderInfo(
      this.props.location.pathname,
    );
    return (
      <div
        className={`Header ${this.state.menuOpen ? 'Header-menu-open' : ''}`}
      >
        <Toolbar
          onMenuToggle={this.onMenuToggle.bind(this)}
          menuOpen={this.state.menuOpen}
        ></Toolbar>
        <ReactCSSTransitionGroup
          component="div"
          transitionName={`header-move-${pos}`}
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}
        >
          {logo && !this.state.menuOpen && (
            <a
              className="Header-img-a"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="Header-img" src={logo} alt={alt} />
            </a>
          )}
        </ReactCSSTransitionGroup>
        <div className="Header-menu-list">
          {headerInfo.map(info => (
            <ReactCSSTransitionGroup
              key={info.name}
              transitionName="fade"
              transitionEnterTimeout={300}
              transitionLeaveTimeout={200}
            >
              {this.state.menuOpen && (
                <img
                  onClick={() => this.navigateTo(info.name)}
                  key={info.name}
                  className="Header-img Header-menu-img"
                  src={info.logo}
                  alt={info.alt}
                />
              )}
            </ReactCSSTransitionGroup>
          ))}
        </div>
        <ReactCSSTransitionGroup
          transitionName="fade-long"
          transitionEnterTimeout={600}
          transitionLeaveTimeout={200}
        >
          {title && !this.state.menuOpen && (
            <div key="Header-title" className="Header-title">
              {title}
            </div>
          )}
        </ReactCSSTransitionGroup>
        <div
          className={`Header-underline ${
            this.state.menuOpen ? 'Header-underline-long' : ''
          }`}
        ></div>
      </div>
    );
  }
}

export default withRouter(Header);
