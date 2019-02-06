import React, { Component } from 'react';
import './InfoPage.css';

import GeneralInfo from '../../components/GeneralInfo/GeneralInfo';
import { getInfo } from '../../Info';

class InfoPage extends Component {
  render() {
    const info = getInfo(this.props.location.pathname);
    return (
      <div className="InfoPage">
        <div className="InfoPage-section">
          { info && <GeneralInfo {...info.generalInfo}></GeneralInfo> }
        </div>
        <div className="InfoPage-divider"></div>
        <div className="InfoPage-projects">
          <div className="InfoPage-header">Projects</div>
        </div>
      </div>
    )
  }
}

export default InfoPage;
