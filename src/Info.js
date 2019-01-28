const mapLocationToHeaderInfo = (location) => {
    switch (location) {
        case '/blueprint': return {
                logo: '/assets/bp_small_color.png',
                title: 'Blueprint',
                alt: 'Blueprint logo'
            };
        case '/acs': return {
                logo: '/assets/acs_small_bw.png',
                title: 'Association of Caribbean Students',
                alt: 'ACS logo'
            };
        case '/teleios': return {
                logo: '/assets/teleios_small_color_whitebg.png',
                title: 'Teleios Systems Limited',
                alt: 'Teleios logo'
            };
        case '/massy': return {
                logo: '/assets/massy_small_color.png',
                title: 'Massy Technologies InfoCom',
                alt: 'Massy Group logo'
            };
        default:
            return {};
    }
}

export { mapLocationToHeaderInfo };
