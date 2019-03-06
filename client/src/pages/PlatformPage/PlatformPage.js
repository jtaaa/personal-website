import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addLogitem } from './../../redux/actions';

class PlatformPage extends Component {
  render() {
    return (
      <div className="PlatformPage">
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  log: state.log
});

const mapDispatchToProps = {
  addLogitem,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlatformPage);
