import { actionTypes } from './actionTypes';

export const addLogitem = logitem => ({
  type: actionTypes.ADD_LOGITEM,
  logitem,
});

export const createLogItem = input => dispatch => fetch('/api/log', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ input }),
}).then(res => {
  if (!res.ok) {
    throw new Error(`I couldn't create a logitem with input value "${input}".`)
  }
  return res.json().then(logitem => {
    dispatch(addLogitem(logitem));
    return logitem;
  });
});
