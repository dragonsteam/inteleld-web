import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './rootReducer';
import { INITIAL_STATE as AUTH_INITIAL_STATE } from './auth/reducer';
import storePersist, { localStorageHealthCheck } from './storePersist';

localStorageHealthCheck();

const auth_state = storePersist.get('auth');

const initialState = {
  auth: {
    current: {
      data: auth_state ? auth_state.data : null,
      errorFields: null,
    },
    isLoggedIn: auth_state ? true : false,
    isLoading: false,
    isSuccess: false,
  },
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  //   devTools: import.meta.env.PROD === false, // Enable Redux DevTools in development mode
});

export default store;
