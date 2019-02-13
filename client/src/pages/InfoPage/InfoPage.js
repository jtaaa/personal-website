import React, { Component } from 'react';
import './InfoPage.css';

import GeneralInfo from '../../components/GeneralInfo/GeneralInfo';
import { getInfo } from '../../Info';
import ProjectInfo from '../../components/ProjectInfo/ProjectInfo';

class InfoPage extends Component {
  render() {
    const info = getInfo(this.props.location.pathname);
    return (
      <div className="InfoPage">
        <div className="InfoPage-section">
          { info && <GeneralInfo {...info.generalInfo} /> }
        </div>
        <div className="Page-divider"></div>
        <div className="InfoPage-projects">
          <div className="InfoPage-header">Projects</div>
          { info.projectsInfo.map(projectInfo => (
          <ProjectInfo key={projectInfo.name} {...projectInfo} /> ))}
        </div>
      </div>
    )
  }
}

export default InfoPage;
