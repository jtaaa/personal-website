import { actionTypes } from './../actions/actionTypes';

const defaultState = [];

export const log = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.ADD_LOGITEMS:
      return [  ...action.logitems, ...state ];  
    default:
      return state;
  }
}
