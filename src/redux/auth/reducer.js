import * as actionTypes from './types';

export const INITIAL_STATE = {
  current: {
    data: null,
    errorFields: null,
  },
  isLoggedIn: false,
  isLoading: false,
  isSuccess: false,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.REQUEST_SUCCESS:
      return {
        current: action.payload,
        isLoggedIn: action.payload.data ? true : false,
        isLoading: false,
        isSuccess: true,
      };

    case actionTypes.REQUEST_FAILED:
      return {
        current: action.payload,
        isLoggedIn: false,
        isLoading: false,
        isSuccess: false,
      };

    case actionTypes.LOGOUT:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default authReducer;
