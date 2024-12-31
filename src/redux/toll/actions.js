import * as actionTypes from './types';
import { request } from '@/request';

export const toll = {
  listRecords: (report_id) => async (dispatch) => {
    dispatch({
      type: actionTypes.REQUEST_LOADING,
      keyState: 'records_list',
      payload: null,
    });

    let data = await request.list({ url: `toll-reports/${report_id}/records` });

    if (data.success) {
      dispatch({
        type: actionTypes.REQUEST_SUCCESS,
        keyState: 'records_list',
        payload: data.result,
      });
    } else {
      dispatch({
        type: actionTypes.REQUEST_FAILED,
        keyState: 'records_list',
        payload: null,
      });
    }
  },
};
