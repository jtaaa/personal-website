const ClassSet = (strs, ...states) => states[0].all === true ?
    strs.map(str => `${str.trime()} ${states.map(state => `${strs[0].trim()}-${state}`)}`)
  : `${strs[0].trim()} ${states.map(state => `${strs[0].trim()}-${state}`)}`;

const date = (strs, date) => (new Date(date)).toLocaleDateString();

const time = (strs, time) => {
  const [ hms, suffix ] = (new Date(time)).toLocaleTimeString().split(' ');
  const [ hours, minutes ] = hms.split(':');
  return `${hours}:${minutes}${suffix.toLowerCase()}`;
}

export {
  ClassSet,
  time,
  date,
};
