import * as actionTypes from './types';

export const initialState = {
  isModalOpen: false,
  isPanelClose: true,
};

export function contextReducer(state, action) {
  switch (action.type) {
    case actionTypes.OPEN_MODAL:
      return {
        ...state,
        isModalOpen: true,
      };
    case actionTypes.CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
      };

    case actionTypes.OPEN_PANEL:
      return {
        ...state,
        isPanelClose: false,
      };
    case actionTypes.CLOSE_PANEL:
      return {
        ...state,
        isPanelClose: true,
      };
    case actionTypes.TOGGLE_PANEL:
      return {
        ...state,
        isPanelClose: !state.isPanelClose,
      };

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
