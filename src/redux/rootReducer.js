import { combineReducers } from 'redux';

import { reducer as authReducer } from './auth';
import { reducer as crudReducer } from './crud';
import { reducer as mapReducer } from './map';
import { reducer as tollReducer } from './toll';

// combine all reducers.

const rootReducer = combineReducers({
  auth: authReducer,
  crud: crudReducer,
  map: mapReducer,
  toll: tollReducer,
});

export default rootReducer;
