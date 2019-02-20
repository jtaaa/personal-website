import React, { Component } from 'react';
import './EditProject.css';

class EditProject extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      newTag: '',
      _id: '',
      name: '',            // don't forget empty strings are falsey o.0
      title: '',
      description: '',
      href: '',
      tags: [],            // empty arrays aren't. fight me if you want
      sections: [],
      logo: { src: '', alt: '' },
      ...props,
    };

    this.getChangeHandler = this.getChangeHandler.bind(this);
  }

  getProject() {
    fetch(`/api/project/${this.props.name}`)
      .then(res => {
        if (!res.ok) {
          throw Error(`It seems I couldn't find the ${this.props.name} project.`);
        }
        return res.json();
      })
      .then(project => this.setState(project))
      .catch(err => process.env.REACT_APP_ENV === 'development' || err.message === undefined ?
          console.error(err)
        : console.log(err.message)
      );
  }

  componentDidMount() {
    this.getProject();
  }

  handleSubmit() {

  }

  getChangeHandler(field) {
    return event => {
      const { target: { value } } = event;
      if (field === 'logo src') {
        return this.setState(state => ({ logo: { src: value, alt: state.logo.alt } }));
      } else if (field === 'logo alt') {
        return this.setState(state => ({ logo: { src: state.logo.src, alt: value } }));
      } else if (field === 'tag') {
        return this.setState(state => ({ tags: [ ...state.tags, value ] }));
      }
      return this.setState({ [field]: value });
    }
  }

  handleKeyPress(field) {
    return event => {
      const { key } = event;
      if (key === 'Enter') {
        const handler = this.getChangeHandler(field);
        handler(event);
        this.setState({ newTag: '' });
      }
    }
  }

  removeTag(remTag) {
    this.setState(state => ({ tags: state.tags.filter(tag => tag !== remTag) }));
  }
  
  render() {
    return (
      <div className="EditProject">
        <div className="EditProject-header">
          <div className="EditProject-list">
            <div className="EditProject-li">
              <div className="EditProject-li-label">id:</div>
              <div className="EditProject-li-value">{ this.state._id }</div>
            </div>
            <div className="EditProject-li">
              <div className="EditProject-li-label">name:</div>
              <div className="EditProject-li-value">{ this.state.name }</div>
            </div>
          </div>
        </div>
        <form onSubmit={this.handleSubmit} className="EditProject-form">
          <div className="EditProject-field">
            <label className="EditProject-label">title:</label>
            <input
              type="text"
              value={this.state.title}
              className="EditProject-input"
              onChange={this.getChangeHandler('title')} />
          </div>
          <div className="EditProject-field">
            <label className="EditProject-label">description:</label>
            <textarea
              rows={3}
              value={this.state.description}
              className="EditProject-input"
              onChange={this.getChangeHandler('description')} />
          </div>
          <div className="EditProject-field">
            <label className="EditProject-label">href:</label>
            <input
              type="text"
              value={this.state.href}
              className="EditProject-input"
              onChange={this.getChangeHandler('href')} />
          </div>
          <div className="EditProject-fieldset">
            <div className="EditProject-fieldset-label">logo:</div>
            <div className="EditProject-field">
              <label className="EditProject-label">src:</label>
              <input
                type="text"
                value={this.state.logo.src}
                className="EditProject-input"
                onChange={this.getChangeHandler('logo src')} />
            </div>
            <div className="EditProject-field">
              <label className="EditProject-label">alt:</label>
              <input
                type="text"
                value={this.state.logo.alt}
                className="EditProject-input"
                onChange={this.getChangeHandler('logo alt')} />
            </div>
          </div>
          <div className="EditProject-fieldset">
            <div className="EditProject-fieldset-label">tags:</div>
            <div className="EditProject-input-list">
              { this.state.tags.map(tag => (
              <div key={tag} className="EditProject-input-li">
                <div className="EditProject-input-li-value">{ tag }</div>
                <div className="EditProject-input-li-delete" onClick={() => this.removeTag(tag)}>x</div>
              </div> ))}
            </div>
            <div className="EditProject-field">
              <label className="EditProject-label">add:</label>
              <input
                type="text"
                value={this.state.newTag}
                className="EditProject-input"
                onChange={this.getChangeHandler('newTag')}
                onKeyPress={this.handleKeyPress('tag')} />
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default EditProject;
