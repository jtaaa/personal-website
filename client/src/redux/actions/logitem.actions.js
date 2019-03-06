import { actionTypes } from './actionTypes';

export const addLogitem = logitem => ({
  type: actionTypes.ADD_LOGITEM,
  logitem,
});
