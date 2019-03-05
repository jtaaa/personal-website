import React, { Component } from 'react';
import './SubSection.css';

import ExpandList from './ExpandList/ExpandList';

class SubSection extends Component {
  renderContent() {
    const { type, contents, backgroundColor, color } = this.props;
    switch (type) {
      case 'paragraph':
        return contents.map((content, index) => (
          <p key={index} className="SubSection-paragraph">{ content }</p>
        ));
      case 'breakdown':
      case 'rundown':
      case 'summary':
      case 'breakdown of de rundown':
      case 'summary of de breakdown of the rundown':
        return (
          <div className="SubSection-breakdown" style={{ backgroundColor, color }}>
            { contents.map((content, index) => (
            <div key={index} className="SubSection-breakdown-point">{ content }</div> ))}
          </div>
        );
      case 'expand-list':
        return (<ExpandList {...this.props} />);
      case 'create-expand-list':
        return (<ExpandList new={true} {...this.props} />);
      default:
        return null;
    }
  }
  render() {
    return (
      <div className="SubSection">
        { this.props.title &&
        <div className="SubSection-title">{ this.props.title }</div> }
        { this.renderContent() }
      </div>
    );
  }
};

export default SubSection;
