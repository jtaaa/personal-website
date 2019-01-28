const linkGroups = [{
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
}];

export default linkGroups;
