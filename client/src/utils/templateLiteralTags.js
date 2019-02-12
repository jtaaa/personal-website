const ClassSet = (strs, ...states) => states[0].all === true ?
    strs.map(str => `${str.trime()} ${states.map(state => `${strs[0].trim()}-${state}`)}`)
  : `${strs[0].trim()} ${states.map(state => `${strs[0].trim()}-${state}`)}`;

export {
  ClassSet,
};
