import { SET_PROFILE } from "../actions/profile.actions";

const defaultProfile = {};

const profile = (state = defaultProfile, action) => {
  switch(action.type) {
    case SET_PROFILE:
      return action.profile;
    default:
      return state;
  }
};

export { profile };
