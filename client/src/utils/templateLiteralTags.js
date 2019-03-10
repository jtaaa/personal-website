const ClassSet = (strs, ...states) => states[0].all === true ?
    strs.map(str => `${str.trime()} ${states.map(state => `${strs[0].trim()}-${state}`)}`)
  : `${strs[0].trim()} ${states.map(state => `${strs[0].trim()}-${state}`)}`;

const date = (strs, date) => (new Date(date)).toDateString();

const nHour = hours => hours % 12 === 0 ? 12 : hours % 12;
const suffix = hours => hours < 12 ? 'am' : 'pm';
const time = (strs, time) => {
  const [ hms ] = (new Date(time)).toTimeString().split(' ', 1);
  const [ hours, mins ] = hms.split(':', 2);
  return `${nHour(hours)}:${mins.toString().padStart(2, '0')}${suffix(hours)}`;
}

export {
  ClassSet,
  time,
  date,
};
