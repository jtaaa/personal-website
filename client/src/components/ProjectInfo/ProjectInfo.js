import React from 'react';
import './ProjectInfo.css';

import Section from './../Section/Section';

const ProjectInfo = ({ img, alt, title, titleLink, description, sections }) => (
  <div className="ProjectInfo">
    <img className="ProjectInfo-img" src={img} alt={alt} />
    { titleLink
    ? <a className="ProjectInfo-title" href={titleLink} target="_blank" rel="noopener noreferrer">{ title }</a>
    : <div className="ProjectInfo-title">{ title }</div> }
    <div className="ProjectInfo-description">{ description }</div>
    { sections && sections.map(section => (
      <Section key={section.name} {...section}></Section>
    ))}
  </div>
);

export default ProjectInfo;
