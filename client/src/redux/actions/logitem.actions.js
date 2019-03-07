import { actionTypes } from './actionTypes';

export const addLogitems = logitems => ({
  type: actionTypes.ADD_LOGITEMS,
  logitems,
});

export const createLogItem = input => dispatch => fetch('/api/log?parse=true', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ input }),
}).then(res => {
  if (!res.ok) {
    throw new Error(`I couldn't create a logitem with input value "${input}".`);
  }
  return res.json().then(logitem => {
    dispatch(addLogitems([ logitem ]));
    return logitem;
  });
});

export const refreshLog = () => dispatch => fetch('/api/log').then(res => {
  if (!res.ok) {
    throw new Error(`I couldn't get your log from the backend. Weird.`);
  }
  return res.json().then(log => {
    dispatch(addLogitems(log));
    return log;
  });
})
