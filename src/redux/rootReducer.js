import { combineReducers } from 'redux';

import { reducer as authReducer } from './auth';

// combine all reducers.

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
