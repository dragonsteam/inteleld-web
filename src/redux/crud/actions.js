import * as actionTypes from './types';
import { request } from '@/request';

export const crud = {
  resetState:
    (props = {}) =>
    async (dispatch) => {
      dispatch({
        type: actionTypes.RESET_STATE,
      });
    },
  resetAction:
    ({ actionType }) =>
    async (dispatch) => {
      dispatch({
        type: actionTypes.RESET_ACTION,
        keyState: actionType,
        payload: null,
      });
    },
  currentItem:
    ({ data }) =>
    async (dispatch) => {
      dispatch({
        type: actionTypes.CURRENT_ITEM,
        payload: { ...data },
      });
    },
  currentAction:
    ({ actionType, data }) =>
    async (dispatch) => {
      dispatch({
        type: actionTypes.CURRENT_ACTION,
        keyState: actionType,
        payload: { ...data },
      });
    },
  list:
    ({ entity, options = { page: 1, items: 10 } }) =>
    async (dispatch) => {
      dispatch({
        type: actionTypes.REQUEST_LOADING,
        keyState: 'list',
        payload: null,
      });

      let data = await request.list({ url: `${entity}`, pagination: options });

      if (data.success) {
        const result = {
          items: data.result.results || [],
          pagination: {
            current: options.page,
            pageSize: options.items,
            total: data.result.count || options.items,
          },
        };
        dispatch({
          type: actionTypes.REQUEST_SUCCESS,
          keyState: 'list',
          payload: result,
        });
      } else {
        dispatch({
          type: actionTypes.REQUEST_FAILED,
          keyState: 'list',
          payload: null,
        });
      }
    },
  create:
    ({ entity, data }) =>
    async (dispatch) => {
      dispatch({
        type: actionTypes.REQUEST_LOADING,
        keyState: 'create',
        payload: null,
      });

      console.log('shit', data);

      let resData = await request.create({ entity, data });

      if (resData.success) {
        dispatch({
          type: actionTypes.REQUEST_SUCCESS,
          keyState: 'create',
          payload: resData.result,
        });
      } else {
        dispatch({
          type: actionTypes.REQUEST_FAILED,
          keyState: 'create',
          payload: {
            data: null,
            errorFields: resData.result,
          },
        });
      }
    },
  update:
    ({ entity, id, jsonData }) =>
    async (dispatch) => {
      dispatch({
        type: actionTypes.REQUEST_LOADING,
        keyState: 'update',
        payload: null,
      });

      let data = null;

      data = await request.update({ entity, id, jsonData });

      if (data.success) {
        dispatch({
          type: actionTypes.REQUEST_SUCCESS,
          keyState: 'update',
          payload: data.result,
        });
        dispatch({
          type: actionTypes.CURRENT_ITEM,
          payload: data.result,
        });
      } else {
        dispatch({
          type: actionTypes.REQUEST_FAILED,
          keyState: 'update',
          payload: null,
        });
      }
    },
  delete:
    ({ entity, id }) =>
    async (dispatch) => {
      // dispatch({
      //   type: actionTypes.RESET_ACTION,
      //   keyState: 'delete',
      // });

      dispatch({
        type: actionTypes.REQUEST_LOADING,
        keyState: 'delete',
        payload: null,
      });

      let data = await request.delete({ entity, id });

      if (data.success) {
        dispatch({
          type: actionTypes.REQUEST_SUCCESS,
          keyState: 'delete',
          payload: id,
        });
      } else {
        dispatch({
          type: actionTypes.REQUEST_FAILED,
          keyState: 'delete',
          payload: null,
        });
      }
    },
  syncData:
    ({ entity, id }) =>
    async (dispatch) => {
      dispatch({
        type: actionTypes.REQUEST_LOADING,
        keyState: 'delete',
        payload: null,
      });

      let data = await request.syncData({ entity, id });

      if (data.success) {
        dispatch({
          type: actionTypes.REQUEST_SUCCESS,
          keyState: 'syncData',
          payload: id,
        });
      } else {
        dispatch({
          type: actionTypes.REQUEST_FAILED,
          keyState: 'syncData',
          payload: null,
        });
      }
    },
};
