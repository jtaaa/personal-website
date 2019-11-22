import React, { Component } from 'react';
import './MenuButton.css';

class MenuButton extends Component {
  toggleMenu() {
    if (this.props.onMenuToggle) {
      this.props.onMenuToggle();
    }
  }

  render() {
    return (
      <div className="MenuButton-wrapper">
        <div
          className={`MenuButton ${
            this.props.menuOpen ? 'MenuButton-open' : ''
          }`}
          onClick={this.toggleMenu.bind(this)}
        ></div>
      </div>
    );
  }
}

export default MenuButton;
