import * as actionTypes from './types';

const INITIAL_KEY_STATE = {
  result: [],
  isLoading: false,
  isSuccess: false,
};

const INITIAL_STATE = {
  trucks_list: INITIAL_KEY_STATE,
  sidepanel_open: false,
};

const mapReducer = (state = INITIAL_STATE, action) => {
  const { payload, keyState } = action;
  switch (action.type) {
    case actionTypes.RESET_STATE:
      return INITIAL_STATE;
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
    case actionTypes.OPEN_SIDE_PANEL:
      return {
        ...state,
        sidepanel_open: true,
      };
    case actionTypes.CLOSE_SIDE_PANEL:
      return {
        ...state,
        sidepanel_open: false,
      };

    default:
      return state;
  }
};

export default mapReducer;
