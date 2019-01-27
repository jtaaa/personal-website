import React from 'react';
import './LinkList.css';

import ReactTooltip from 'react-tooltip'

const LinkList = ({ links, dividers = [] }) => {
  return (
    <div className="LinkList">
      { links.map(({ href, src, alt, tooltip, round = false }) => (
        <div key={href} className="LinkList-link-container">
          <a
            className="LinkList-link"
            href={href}
            target="_blank"
            rel="noopener noreferrer">
            <img 
              data-tip
              data-for={href}
              className={`LinkList-link-img ${round ? 'LinkList-round-img' : ''}`}
              src={src}
              alt={alt} />
          </a>
          <ReactTooltip id={href} type='light' effect='solid' place="bottom">
            { tooltip }
          </ReactTooltip>
          { dividers.includes(href) &&
          <div className="LinkList-divider"></div> }
        </div>
      )) }
    </div>
  );
};

export default LinkList