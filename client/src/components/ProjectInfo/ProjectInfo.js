import React from 'react';
import './ProjectInfo.css';

import Section from './../Section/Section';

const ProjectInfo = ({ logo, title, href, description, sections }) => (
  <div className="ProjectInfo">
    { logo &&
    <img className="ProjectInfo-img" src={logo.src} alt={logo.alt} /> }
    { href
    ? <a className="ProjectInfo-title" href={href} target="_blank" rel="noopener noreferrer">{ title }</a>
    : <div className="ProjectInfo-title">{ title }</div> }
    <div className="ProjectInfo-description">{ description }</div>
    { sections && sections.map(section => (
      <Section key={section.name} {...section}></Section>
    ))}
  </div>
);

export default ProjectInfo;
