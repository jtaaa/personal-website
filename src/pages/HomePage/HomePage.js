import React, { Component } from "react";
import "./HomePage.css";

import LinkList from "../../components/LinkList/LinkList";
import linkGroups from "../../Links";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = { fadedout: true };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ fadedout: false }), 800);
  }

  render() {
    return (
      <div className="HomePage">
        <img
          className={`HomePage-backdrop ${
            this.state.fadedout ? "faded-out" : ""
          }`}
          src="/assets/headshot.jpg"
          alt="Handsome headshot o.O"
        />
        <div className="HomePage-content">
          <div className="HomePage-title">Joshua Allum</div>
          <div className="HomePage-subtitle">Software Developer</div>
          <div className="HomePage-description">
            Former Front-end Developer at{" "}
            <a
              href="https://www.cognite.com/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cognite AS
            </a>{" "}
            in Oslo.
            <br />
            Working on{" "}
            <a
              href="https://github.com/SYSTT/sys-monorepo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sell Your Stuff
            </a>
            .
          </div>
          <LinkList linkGroups={linkGroups} />
        </div>
      </div>
    );
  }
}

export default HomePage;
