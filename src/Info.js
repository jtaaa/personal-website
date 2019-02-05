const headerInfo = [{
    logo: '/assets/bp_small_color.png',
    title: 'Blueprint',
    name: 'blueprint',
    alt: 'Blueprint logo',
    pos: 0,
}, {
    logo: '/assets/acs_small_bw.png',
    title: 'Association of Caribbean Students',
    name: 'acs',
    alt: 'ACS logo',
    pos: 1,
}, {
    logo: '/assets/teleios_small_color_whitebg.png',
    title: 'Teleios Systems Limited',
    name: 'teleios',
    alt: 'Teleios logo',
    pos: 2,
}, {
    logo: '/assets/massy_small_color.png',
    title: 'Massy Technologies InfoCom',
    name: 'massy',
    alt: 'Massy Group logo',
    pos: 3,
}];

const mapLocationToHeaderInfo = (location) => {
    switch (location) {
        case '/info/blueprint': return headerInfo[0];
        case '/info/acs':       return headerInfo[1];
        case '/info/teleios':   return headerInfo[2];
        case '/info/massy':     return headerInfo[3];
        default:                return {};
    }
}

const info = {
    '/info/blueprint': {
        name: 'blueprint',
        generalInfo: {
            description: 'Blueprint is a student group that partners with non-profit organizations to develop tech solutions, such as website, mobile apps and backend services, free of charge.',
            infoPoints: [{
                label: 'Role:',
                value: 'Project Developer',
            }, {
                label: 'Joined:',
                value: 'Jan, 2018',
            }]
        },
    },
    '/info/acs': {
        name: 'acs',
        generalInfo: {
            description: 'The University of Waterloo ACS is a student group that fosters a strong Caribbean community and promotes Caribbean culture.',
            infoPoints: [{
                label: 'Role:',
                value: 'Web Administrator',
            }, {
                label: 'Joined:',
                value: 'Oct, 2016',
            }]
        },
    },
};

const getInfo = (location) => {
    return info[location];
}

export { mapLocationToHeaderInfo, getInfo, headerInfo };
