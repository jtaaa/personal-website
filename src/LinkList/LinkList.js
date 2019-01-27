import React from 'react';
import './LinkList.css';

import ReactTooltip from 'react-tooltip';

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

const LinkList = ({ linkGroups }) => {
  const children = [];
  for (let i = 0; i < linkGroups.length; i++) {
    const { groupName, links, size } = linkGroups[i];
    const group = (
      <div key={groupName} className="LinkList-group">
        { links.map(({ href, src, alt, tooltip, title, round = false }) => (
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
              style={{ width: size === 'small' ? '24px' : '32px' }}
              src={src}
              alt={alt} />
          </a>
          <ReactTooltip
            disable={isMobile}
            id={href}
            type='light'
            effect='solid'
            place="bottom">
            { tooltip }
          </ReactTooltip>
          { title &&
          <div className="LinkList-link-title">{ title }</div> }
        </div>
        )) }
      </div>
    );
    children.push(group);
    if (i !== linkGroups.length - 1) {
      children.push(<div className="LinkList-divider"></div>);
    }
  }
  return (
    <div className="LinkList">
      { children }
    </div>
  );
};

export default LinkList