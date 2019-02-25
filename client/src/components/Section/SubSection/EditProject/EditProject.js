import React, { Component } from 'react';
import './EditProject.css';

import { ClassSet } from './../../../../utils/templateLiteralTags';

class EditProject extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      newTag: '',
      dirty: { tags: {} },
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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.isDirty = this.isDirty.bind(this);
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

  handleSubmit(event) {
    event.preventDefault();
    if (this.isDirty()) {
      fetch(`/api/project/${this.props.name}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.state),
      })
        .then(res => {
          if (!res.ok) {
            throw Error(`It seems I couldn't save the ${this.props.name} project.`);
          }
          return res.json();
        })
        .then(project => this.setState({ ...project, dirty: { tags: {} } }))
        .catch(err => process.env.REACT_APP_ENV === 'development' || err.message === undefined ?
            console.error(err)
          : console.log(err.message)
        );
    }
  }

  getChangeHandler(field) {
    return event => {
      const { target: { value } } = event;
      if (field === 'logo src') {
        return this.setState(state => ({
          logo: { src: value, alt: state.logo.alt },
          dirty: { ...state.dirty, logoSrc: !this.props.logo || value !== this.props.logo.src },
        }));
      } else if (field === 'logo alt') {
        return this.setState(state => ({
          logo: { src: state.logo.src,alt: value },
          dirty: { ...state.dirty, logoAlt: !this.props.logo || value !== this.props.logo.alt },
        }));
      } else if (field === 'tag') {
        return this.setState(state => ({
          tags: [ ...state.tags, value ],
          dirty: { ...state.dirty, tags: state.dirty.tags ?
              { ...state.dirty.tags, [value]: !this.props.tags.includes(value) }
            : { [value]: !this.props.tags.includes(value) } },
        }));
      } else if (field === 'newTag') {
        return this.setState({ [field]: value });
      }
      return this.setState(state => ({
        [field]: value,
        dirty: { ...state.dirty, [field]: this.props[field] !== value },
      }));
    }
  }

  handleKeyPress(field) {
    return event => {
      console.log('object');
      const { key, target } = event;
      if (key === 'Enter') {
        if (target.name === 'tags') {
          event.preventDefault();
        }
        const handler = this.getChangeHandler(field);
        handler(event);
        this.setState({ newTag: '' });
      }
    }
  }

  removeTag(remTag) {
    this.setState(state => ({
      tags: state.tags.filter(tag => tag !== remTag),
      dirty: { ...state.dirty, tags: { ...state.tags, [remTag]: true } },
    }));
  }

  isDirty() {
    return Object.values(this.state.dirty).includes(true) || Object.values(this.state.dirty.tags).includes(true);
  }
  
  render() {
    return (
      <div className="EditProject">
        { !this.props.new &&
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
        </div> }
        <form onSubmit={this.handleSubmit} className="EditProject-form">
          <div className="EditProject-field">
            <label className="EditProject-label">name:</label>
            <input
              type="text"
              value={this.state.name}
              className={ClassSet`EditProject-input ${this.state.dirty.name ? 'dirty' : ''}`}
              onChange={this.getChangeHandler('name')} />
          </div>
          <div className="EditProject-field">
            <label className="EditProject-label">title:</label>
            <input
              type="text"
              value={this.state.title}
              className={ClassSet`EditProject-input ${this.state.dirty.title ? 'dirty' : ''}`}
              onChange={this.getChangeHandler('title')} />
          </div>
          <div className="EditProject-field">
            <label className="EditProject-label">description:</label>
            <textarea
              rows={3}
              value={this.state.description}
              className={ClassSet`EditProject-input ${this.state.dirty.description ? 'dirty' : ''}`}
              onChange={this.getChangeHandler('description')} />
          </div>
          <div className="EditProject-field">
            <label className="EditProject-label">href:</label>
            <input
              type="text"
              value={this.state.href}
              className={ClassSet`EditProject-input ${this.state.dirty.href ? 'dirty' : ''}`}
              onChange={this.getChangeHandler('href')} />
          </div>
          <div className="EditProject-fieldset">
            <div className="EditProject-fieldset-label">logo:</div>
            <div className="EditProject-field">
              <label className="EditProject-label">src:</label>
              <input
                type="text"
                value={this.state.logo.src}
                className={ClassSet`EditProject-input ${this.state.dirty.logoSrc ? 'dirty' : ''}`}
                onChange={this.getChangeHandler('logo src')} />
            </div>
            <div className="EditProject-field">
              <label className="EditProject-label">alt:</label>
              <input
                type="text"
                value={this.state.logo.alt}
                className={ClassSet`EditProject-input ${this.state.dirty.logoAlt ? 'dirty' : ''}`}
                onChange={this.getChangeHandler('logo alt')} />
            </div>
          </div>
          <div className="EditProject-fieldset">
            <div className="EditProject-fieldset-label">tags:</div>
            <div className="EditProject-input-list">
              { this.state.tags.map(tag => (
              <div key={tag} className={ClassSet`EditProject-input-li ${this.state.dirty.tags[tag] ? 'dirty' : ''}`}>
                <div className="EditProject-input-li-value">{ tag }</div>
                <div className="EditProject-input-li-delete" onClick={() => this.removeTag(tag)}>x</div>
              </div> ))}
            </div>
            <div className="EditProject-field">
              <label className="EditProject-label">add:</label>
              <input
                type="text"
                name="tags"
                value={this.state.newTag}
                className="EditProject-input"
                onChange={this.getChangeHandler('newTag')}
                onKeyPress={this.handleKeyPress('tag')} />
            </div>
          </div>
          <div className="EditProject-menu">
            <button type="submit" className="EditProject-save">save{ !this.isDirty() ? 'd' : null }</button>
          </div>
        </form>
      </div>
    );
  }
};

export default EditProject;
