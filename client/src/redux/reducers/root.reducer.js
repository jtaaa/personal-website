import { combineReducers } from 'redux';

import { profile } from './profile.reducer';

const rootReducer = combineReducers({
  profile,
});

export { rootReducer };
