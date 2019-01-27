import React, { Component } from 'react';
import './App.css';

import LinkList from './LinkList/LinkList';

class App extends Component {
  constructor(props) {
    super (props);

    this.state = { fadedout: true };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ fadedout: false }), 800);
  }
  render() {
    return (
      <div className="App">
        <img 
          className={`App-backdrop ${this.state.fadedout ? 'faded-out' : ''}`}
          src="/assets/headshot.jpg"
          alt="Handsome headshot o.O" />
        <div className="App-content">
          <div className="App-title">Joshua Allum</div>
          <div className="App-subtitle">Software Developer</div>
          <div className="App-description">
            <a href="https://www.ibm.com/cloud/" target="_blank" rel="noopener noreferrer">Cloud Platform</a> Developer at <a href="https://www.ibm.com/ca-en/" target="_blank" rel="noopener noreferrer">IBM</a> Toronto Labs.<br/>
            On season 1 episode 18 of <a href="https://www.ctv.ca/This-Is-Us" target="_blank" rel="noopener noreferrer">This is Us</a>.<br/>
          </div>
          <LinkList 
            linkGroups={[{
              groupName: 'personal',
              links: [{
                name: 'github',
                href: 'https://github.com/jtaaa/',
                src: '/assets/octocat_small_color.png',
                alt: 'GitHub profile',
                tooltip: <span>View GitHub Profile</span>,
                title: 'GitHub',
                delay: 600,
              }, {
                name: 'resume',
                href: 'https://raw.githack.com/jtaaa/Resume/master/Resume-blue.pdf',
                src: '/assets/resume_small_color_short.png',
                alt: 'Résumé',
                tooltip: <span>View Résumé</span>,
                title: 'Résumé',
                delay: 550,
              }, {
                name: 'email',
                href: 'mailto:joshuatallum@gmail.com',
                src: '/assets/paperplane_small_color.png',
                alt: 'Email address',
                tooltip: <span>Contact Me</span>,
                title: 'Email me',
                delay: 500,
              }],
            }, {
              groupName: 'affiliations',
              size: 'small',
              links: [{
                name: 'teleios',
                href: 'https://www.teleios-systems.com/',
                src: '/assets/teleios_small_color_whitebg.png',
                alt: 'Teleios Systems Limited',
                tooltip: <span>Teleios Systems Limited</span>,
                delay: 450,
              }, {
                name: 'massy',
                href: 'http://www.massygroup.com/home.aspx',
                src: '/assets/massy_small_color.png',
                alt: 'Massy Group',
                tooltip: <span>Massy Technologies InfoCom</span>,
                delay: 400,
              }, {
                name: 'acs',
                href: 'http://uwacs.club',
                src: '/assets/acs_small_bw.png',
                alt: 'University of Waterloo Association of Caribbean Students',
                tooltip: <span>University of Waterloo<br/>Association of Caribbean Students</span>,
                delay: 350,
              }, {
                name: 'blueprint',
                href: 'http://uwblueprint.org',
                src: '/assets/bp_small_color.png',
                alt: 'UW Blueprint',
                tooltip: <span>Blueprint</span>,
                round: true,
                delay: 300,
              }],
             }]} />
        </div>
      </div>
    );
  }
}

export default App;
