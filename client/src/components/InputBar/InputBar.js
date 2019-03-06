import React, { Component } from 'react';
import './InputBar.css';

class InputBar extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      partial: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  onChange({ target: { value } }) {
    this.setState({ partial: value }, () => this.props.onChange(value));
  }

  onKeyPress({ key, target: { value } }) {
    if (key === 'Enter') {
      this.props.onSubmit(value);
      this.setState({ partial: '' }, () => this.props.onChange(''));
    }
  }
  
  render() {
    return (
      <div className="InputBar">
        <input
          className="InputBar-input"
          type="text"
          id={this.props.id}
          value={this.state.partial}
          onChange={this.onChange}
          onKeyPress={this.onKeyPress} />
      </div>
    );
  }
};


export default InputBar;
