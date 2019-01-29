import React, { Component } from 'react';
import './MenuButton.css';

class MenuButton extends Component {
  constructor(props) {
    super(props);
  
    this.state = { open: false };
  }

  toggleMenu() {
    if (this.props.onMenuToggle) {
      this.props.onMenuToggle(!this.state.open);
    } else if (this.state.open && this.props.onMenuClose) {
      this.props.onMenuClose();
    } else if (this.props.onMenuOpen) {
      this.props.onMenuOpen();
    }
    this.setState(state => ({
      open: !state.open,
      ...state,
    }));
  }
  
  render() {
    return (
      <div className="MenuButton" onClick={this.toggleMenu.bind(this)}>
      </div>
    )
  }
}

export default MenuButton;
