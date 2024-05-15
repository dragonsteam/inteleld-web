import { combineReducers } from 'redux';

import { reducer as authReducer } from './auth';
import { reducer as crudReducer } from './crud';
import { reducer as mapReducer } from './map';

// combine all reducers.

const rootReducer = combineReducers({
  auth: authReducer,
  crud: crudReducer,
  map: mapReducer,
});

export default rootReducer;
