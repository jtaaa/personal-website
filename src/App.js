import React, { Component } from 'react';
import './App.css';

import LinkList from './LinkList/LinkList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img 
          className="App-backdrop" 
          src="/assets/headshot.jpg"
          alt="Handsome headshot o.O" />
        <div className="App-content">
          <div className="App-title">Joshua Allum</div>
          <div className="App-subtitle">Software Developer</div>
          <div className="App-description">
            <a href="https://www.ibm.com/cloud/" target="_blank" rel="noopener noreferrer">Cloud Platform</a> Developer at <a href="https://www.ibm.com/ca-en/" target="_blank" rel="noopener noreferrer">IBM</a> Toronto Labs.<br/>
            On season 1 episode 18 of <a href="https://www.ctv.ca/This-Is-Us" target="_blank" rel="noopener noreferrer">This is Us</a>.<br/>
          </div>
          <LinkList links={[{
            href: 'http://uwblueprint.org',
            src: '/assets/bp_bw.jpg',
            alt: 'UW Blueprint',
            tooltip: <span>UW Blueprint</span>,
          }, {
            href: 'http://uwacs.club',
            src: '/assets/acs_bw.png',
            alt: 'University of Waterloo Association of Caribbean Students',
            tooltip: <span>University of Waterloo<br/>Association of Caribbean Students</span>,
          }, {
            href: 'http://www.massygroup.com/home.aspx',
            src: '/assets/massy_bw.jpg',
            alt: 'Massy Group',
            tooltip: <span>Massy Technologies InfoCom</span>,
          }, {
            href: 'https://www.teleios-systems.com/',
            src: '/assets/teleios_bw.png',
            alt: 'Teleios Systems Limited',
            tooltip: <span>Teleios Systems Limited</span>,
          }]} />
        </div>
      </div>
    );
  }
}

export default App;
