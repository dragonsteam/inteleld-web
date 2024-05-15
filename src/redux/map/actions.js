import * as actionTypes from './types';
import { request } from '@/request';

export const map = {
  listTrucks: () => async (dispatch) => {
    dispatch({
      type: actionTypes.REQUEST_LOADING,
      keyState: 'trucks_list',
      payload: null,
    });

    let data = await request.list({ url: 'trucks/info' });

    if (data.success) {
      dispatch({
        type: actionTypes.REQUEST_SUCCESS,
        keyState: 'trucks_list',
        payload: data.result,
      });
    } else {
      dispatch({
        type: actionTypes.REQUEST_FAILED,
        keyState: 'trucks_list',
        payload: null,
      });
    }
  },
  sidePanel:
    (action = 'close') =>
    async (dispatch) => {
      if (action === 'open') {
        dispatch({
          type: actionTypes.OPEN_SIDE_PANEL,
          keyState: null,
          payload: null,
        });
      } else if (action === 'close') {
        dispatch({
          type: actionTypes.CLOSE_SIDE_PANEL,
          keyState: null,
          payload: null,
        });
      } else {
        console.log('!!! error: unhandled sidePanel - action');
      }
    },
};
