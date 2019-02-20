import React, { Component } from 'react';
import './ExpandList.css';

import EditProject from '../EditProject/EditProject';

class ExpandList extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       items: [],
       openItems: new Set(),
    };
  }

  async getItems() {
    fetch(this.props.fetch_uri)
      .then(res => {
        if (!res.ok) {
          throw Error(`It seems I couldn't load the ${this.props.name} items at ${this.props.fetch_uri}.`);
        }
        return res.json();
      })
      .then(items => this.setState({ items }))
      .catch(err => process.env.REACT_APP_ENV === 'development' || err.message === undefined ?
          console.error(err)
        : console.log(err.message)
      );
  }

  componentDidMount() {
    this.getItems();
  }

  toggleItem(id) {
    // Set.prototype.delete() returns true if an element was removed
    if (!this.state.openItems.delete(id)) {
      this.state.openItems.add(id);
    }
    this.setState(state => ({ openItems: new Set(state.openItems) }));
  }
  
  render() {
    return (
      <div className="ExpandList">
        { this.state.items.map(item => (
        <div key={item.name} className="ExpandList-item">
          <div className="ExpandList-item-title" onClick={() => this.toggleItem(item._id)}>{ item.title }</div>
          <div className="ExpandList-item-description">{ item.description }</div>
          { this.state.openItems.has(item._id) &&
          <EditProject {...item} /> }
        </div> ))}
      </div>
    );
  }
};

export default ExpandList;
