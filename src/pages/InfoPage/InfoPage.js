import React, { Component } from 'react';
import './InfoPage.css';

import GeneralInfo from '../../components/GeneralInfo/GeneralInfo';
import { getInfo } from '../../Info';

class InfoPage extends Component {
  render() {
    const info = getInfo(this.props.location.pathname);
    return (
      <div className="InfoPage">
        { info && <GeneralInfo {...info.generalInfo}></GeneralInfo> }
      </div>
    )
  }
}

export default InfoPage;
