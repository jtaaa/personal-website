import { combineReducers } from 'redux';

import { profile } from './profile.reducer';
import { log } from './log.reducer';

const rootReducer = combineReducers({
  profile,
  log,
});

export { rootReducer };
