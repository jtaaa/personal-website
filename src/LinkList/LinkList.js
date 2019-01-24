import React from 'react';
import './LinkList.css';

import ReactTooltip from 'react-tooltip'

const LinkList = ({ links }) => {
  return (
    <div className="LinkList">
      { links.map(({ href, src, alt, tooltip }) => (
        <div key={href}>
          <a
            data-tip
            data-for={href}
            className="LinkList-link"
            href={href}
            target="_blank"
            rel="noopener noreferrer">
            <img className="LinkList-link-img" src={src} alt={alt} />
          </a>
          <ReactTooltip id={href} type='light' effect='solid' place="bottom">
            { tooltip }
          </ReactTooltip>
        </div>
      )) }
    </div>
  );
};

export default LinkList