import { combineReducers } from 'redux';

import { reducer as authReducer } from './auth';
import { reducer as crudReducer } from './crud';

// combine all reducers.

const rootReducer = combineReducers({
  auth: authReducer,
  crud: crudReducer,
});

export default rootReducer;
