import React, { Component } from 'react';
import './Section.css';

import SubSection from './SubSection/SubSection';

class Section extends Component {
  render() {
    return (
      <div className="Section">
          <div className="Section-title">{ this.props.title }</div>
          <div className="Section-underline"></div>
          { this.props.logo && 
          <img className="Section-img" src={this.props.logo.img} alt={this.props.logo.alt}/> }
          { this.props.subsections && this.props.subsections.map(subsection => (
          <SubSection key={subsection.name} {...subsection} /> ))}
      </div>
    );
  }
};

export default Section;
