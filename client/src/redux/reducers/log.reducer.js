import { actionTypes } from './../actions/actionTypes';

const defaultState = [];

export const log = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.ADD_LOGITEM:
      return [ ...state, action.logitem ];  
    default:
      return state;
  }
}
