import { actionTypes } from './../actions/actionTypes';

const defaultState = [];

export const log = (state = defaultState, action) => {
  switch (action.types) {
    case actionTypes.ADD_LOGITEM:
      return [ ...state, action.logitem ];  
    default:
      return state;
  }
}
