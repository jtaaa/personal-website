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
    '/info/teleios': {
        name: 'teleios',
        generalInfo: {
            description: 'Teleios Systems Limited is a leader in cloud, mobile and automation services in the Caribbean, across the government, energy, retail, finance and telecommunications industries.',
            infoPoints: [{
                label: 'Role:',
                value: 'Software Developer',
            }, {
                label: 'Joined:',
                value: 'June, 2017',
            }]
        },
    },
    '/info/massy': {
        name: 'massy',
        generalInfo: {
            description: 'Massy Technologies InfoCom is part of the largest conglomerate in the Caribbean, Massy Holdings Limited, and provides software and IT solutions to customers across the Caribbean.',
            infoPoints: [{
                label: 'Role:',
                value: 'Software & Data Science Developer',
            }, {
                label: 'Joined:',
                value: 'May, 2018',
            }]
        },
    },
};

const getInfo = (location) => {
    return info[location];
}

export { mapLocationToHeaderInfo, getInfo, headerInfo };
