import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createLogItem } from './../../redux/actions';
import InputBar from '../../components/InputBar/InputBar';

class PlatformPage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      partial: '',
    }
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  log: state.log
});

const mapDispatchToProps = {
  createLogItem,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlatformPage);
