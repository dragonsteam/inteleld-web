import * as actionTypes from './types';

const INITIAL_KEY_STATE = {
  result: [],
  isLoading: false,
  isSuccess: false,
};

const INITIAL_STATE = {
  records_list: INITIAL_KEY_STATE,
};

const tollReducer = (state = INITIAL_STATE, action) => {
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

export default tollReducer;
