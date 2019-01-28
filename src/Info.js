const mapLocationToHeaderInfo = (location) => {
    switch (location) {
        case '/info/blueprint': return {
                logo: '/assets/bp_small_color.png',
                title: 'Blueprint',
                alt: 'Blueprint logo'
            };
        case '/info/acs': return {
                logo: '/assets/acs_small_bw.png',
                title: 'Association of Caribbean Students',
                alt: 'ACS logo'
            };
        case '/info/teleios': return {
                logo: '/assets/teleios_small_color_whitebg.png',
                title: 'Teleios Systems Limited',
                alt: 'Teleios logo'
            };
        case '/info/massy': return {
                logo: '/assets/massy_small_color.png',
                title: 'Massy Technologies InfoCom',
                alt: 'Massy Group logo'
            };
        default:
            return {};
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

export { mapLocationToHeaderInfo, getInfo };
