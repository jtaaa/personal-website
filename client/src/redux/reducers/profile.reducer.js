import { actionTypes } from '../actions/actionTypes';

const defaultProfile = {};

const profile = (state = defaultProfile, action) => {
  switch(action.type) {
    case actionTypes.SET_PROFILE:
      return action.profile;
    default:
      return state;
  }
};

export { profile };
