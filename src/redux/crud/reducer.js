import * as actionTypes from './types';

const INITIAL_KEY_STATE = {
  result: null,
  // current: null,
  isLoading: false,
  isSuccess: false,
};

const INITIAL_STATE = {
  current: {
    data: null,
    errorFields: null,
  },
  list: {
    result: {
      items: [],
      pagination: {
        current: 1,
        pageSize: 10,
        total: 1,
      },
    },
    isLoading: false,
    isSuccess: false,
  },
  create: INITIAL_KEY_STATE,
  delete: INITIAL_KEY_STATE,
  syncData: INITIAL_KEY_STATE,
};

const crudReducer = (state = INITIAL_STATE, action) => {
  const { payload, keyState } = action;
  switch (action.type) {
    case actionTypes.REQUEST_LOADING:
      return {
        ...state,
        [keyState]: {
          ...state[keyState],
          isLoading: true,
        },
      };
    case actionTypes.REQUEST_SUCCESS:
      return {
        ...state,
        [keyState]: {
          result: payload,
          isLoading: false,
          isSuccess: true,
        },
      };
    case actionTypes.REQUEST_FAILED:
      return {
        ...state,
        current: action.payload,
        [keyState]: {
          ...state[keyState],
          isLoading: false,
          isSuccess: false,
        },
      };

    default:
      return state;
  }
};

export default crudReducer;
