import React, { Component } from 'react';
import { connect } from 'react-redux';

import InputBar from '../../components/InputBar/InputBar';
import Log from '../../components/Log/Log';

import { createLogItem, refreshLog } from './../../redux/actions';

class PlatformPage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      partial: '',
    }
  }

  componentDidMount() {
    this.props.refreshLog();
  }

  updatePartial(partial) {
    this.setState({ partial });
  }
  
  render() {
    return (
      <div className="PlatformPage">
        <InputBar
          onChange={this.updatePartial.bind(this)}
          onSubmit={this.props.createLogItem} />
        <Log log={this.props.log} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  log: state.log
});

const mapDispatchToProps = {
  createLogItem,
  refreshLog,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlatformPage);
