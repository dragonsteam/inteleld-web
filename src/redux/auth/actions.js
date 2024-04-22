import * as actionTypes from './types';
import * as authService from '@/auth';

export const login =
  ({ loginData }) =>
  async (dispatch) => {
    dispatch({ type: actionTypes.REQUEST_LOADING });

    const data = await authService.login({ loginData });

    if (data.success && data.success === false) {
      dispatch({
        type: actionTypes.REQUEST_FAILED,
      });
    } else {
      const auth_state = {
        current: {
          tokens: data,
        },
        isLoading: false,
        isSuccess: true,
      };

      window.localStorage.setItem('auth', JSON.stringify(auth_state));
      // todo: remove is logout from localstorage

      dispatch({
        type: actionTypes.REQUEST_SUCCESS,
        payload: {
          data,
        },
      });
    }
  };

export const register =
  ({ registerData }) =>
  async (dispatch) => {
    dispatch({ type: actionTypes.REQUEST_LOADING });

    const success = await authService.register({ registerData });

    if (success) {
      dispatch({
        type: actionTypes.REQUEST_SUCCESS,
      });
    } else {
      dispatch({
        type: actionTypes.REQUEST_FAILED,
      });
    }
  };

export const logout = () => async (dispatch) => {
  dispatch({
    type: actionTypes.LOGOUT,
  });

  window.localStorage.removeItem('auth');
  window.localStorage.removeItem('settings');
  window.localStorage.setItem('isLogout', JSON.stringify({ isLogout: true }));
};
