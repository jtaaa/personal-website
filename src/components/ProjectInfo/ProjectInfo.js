import React from 'react';
import './ProjectInfo.css';

const ProjectInfo = ({ img, alt, title, titleLink, description, sections }) => (
  <div className="ProjectInfo">
    <img className="ProjectInfo-img" src={img} alt={alt} />
    { titleLink
    ? <a className="ProjectInfo-title" href={titleLink} target="_blank" rel="noopener noreferrer">{ title }</a>
    : <div className="ProjectInfo-title">{ title }</div> }
    <div className="ProjectInfo-description">{ description }</div>
  </div>
);

export default ProjectInfo;
