import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import './LinkList.css';

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

class LinkList extends Component {
  constructor(props) {
    super(props);
  
    this.state = { greyed: {} };
  }
  
  componentDidMount() {
    this.props.linkGroups.forEach(linkGroup => {
      linkGroup.links.forEach(link => {
        setTimeout(() => this.setState(state => ({
          greyed: { [link.name]: true, ...state.greyed }
        })), link.delay ? link.delay : '500');
      });
    });
  }
  
  
  render() {
    const { linkGroups } = this.props;
    const children = [];
    for (let i = 0; i < linkGroups.length; i++) {
      const { groupName, links, size } = linkGroups[i];
      const group = (
        <div key={groupName} className="LinkList-group">
          { links.map(({ name, href, src, alt, tooltip, title, round = false }) => (
          <div key={name} className="LinkList-link-container">
            <a
              className="LinkList-link"
              href={href}
              target="_blank"
              rel="noopener noreferrer">
              <img 
                data-tip
                data-for={name}
                className={`
                  LinkList-link-img
                  ${round ? 'LinkList-round-img' : ''}
                  ${!this.state.greyed[name] ? 'LinkList-color-img' : ''}
                `}
                style={{ width: size === 'small' ? '24px' : '32px' }}
                src={src}
                alt={alt} />
            </a>
            <ReactTooltip
              disable={isMobile}
              id={name}
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
        children.push(<div key={`LinkList-divider-${i}`} className="LinkList-divider"></div>);
      }
    }

    return (
      <div className="LinkList">
        { children }
      </div>
    );
  };
};

export default LinkList;
