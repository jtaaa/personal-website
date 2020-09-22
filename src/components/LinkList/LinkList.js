import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import LinkImage from "./LinkImage";
import "./LinkList.css";

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const BASE_DELAY = 200;
const DELAY_STEP = 50;

class LinkList extends Component {
  constructor(props) {
    super(props);

    this.state = { greyed: {} };
  }

  componentDidMount() {
    const totalDelay =
      BASE_DELAY +
      this.props.linkGroups.reduce(
        (delay, group) => delay + group.links.length * DELAY_STEP,
        0
      );
    let groupTotalDelay = totalDelay;
    this.props.linkGroups.forEach((linkGroup) => {
      linkGroup.links.forEach((link, linkIndex) => {
        const delay = groupTotalDelay - linkIndex * DELAY_STEP;
        setTimeout(
          () =>
            this.setState((state) => ({
              greyed: { [link.name]: true, ...state.greyed },
            })),
          delay
        );
      });
      groupTotalDelay -= linkGroup.links.length * DELAY_STEP;
    });
  }

  render() {
    const { linkGroups } = this.props;
    const children = [];
    for (let i = 0; i < linkGroups.length; i++) {
      const { groupName, title, links, size } = linkGroups[i];
      const group = (
        <div key={groupName} className="LinkList-group">
          <div className="LinkList-group-title">{title}</div>
          <div className="LinkList-group-links">
            {links.map(
              ({
                name,
                href,
                src,
                fallbackSrc,
                alt,
                tooltip,
                title,
                round = false,
              }) => (
                <div key={name} className="LinkList-link-container">
                  <a
                    className="LinkList-link"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkImage
                      data-tip
                      data-for={name}
                      className={`
                  LinkList-link-img
                  ${round ? "LinkList-round-img" : ""}
                  ${!this.state.greyed[name] ? "LinkList-color-img" : ""}
                `}
                      style={{ width: size === "small" ? "24px" : "32px" }}
                      src={src}
                      alt={alt}
                      fallbackSrc={fallbackSrc}
                      fallbackType="image/png"
                    />
                  </a>
                  <ReactTooltip
                    disable={isMobile}
                    id={name}
                    type="light"
                    effect="solid"
                    place="bottom"
                  >
                    {tooltip}
                  </ReactTooltip>
                  {title && <div className="LinkList-link-title">{title}</div>}
                </div>
              )
            )}
          </div>
        </div>
      );
      children.push(group);
      if (i !== linkGroups.length - 1) {
        children.push(
          <div key={`LinkList-divider-${i}`} className="LinkList-divider" />
        );
      }
    }

    return <div className="LinkList">{children}</div>;
  }
}

export default LinkList;
