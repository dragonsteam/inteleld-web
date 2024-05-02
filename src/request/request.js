import axios from 'axios';

import { API_BASE_URL } from '@/config/serverApiConfig';
import getAuthHeaders from '@/auth/getAuthHeaders';
import handleSuccess from './handleSuccess';
import handleError from './handleError';

axios.defaults.baseURL = API_BASE_URL;

const request = {
  list: async ({ entity, options = { page: 1, items: 10 } }) => {
    try {
      const response = await axios.get(`${entity}/?page=${options.page}`, {
        headers: { ...getAuthHeaders() },
      });

      return handleSuccess(response);
    } catch (error) {
      return handleError(error);
    }
  },
  create: async ({ entity, data }) => {
    try {
      const response = await axios.post(entity + '/', data, {
        headers: { ...getAuthHeaders() },
      });

      return handleSuccess(response);
    } catch (error) {
      return handleError(error);
    }
  },
  delete: async ({ entity, id }) => {
    try {
      const response = await axios.delete(entity + '/' + id, {
        headers: { ...getAuthHeaders() },
      });

      return handleSuccess(response);
    } catch (error) {
      return handleError(error);
    }
  },
  syncData: async ({ entity, id }) => {
    try {
      const response = await axios.post(
        `${entity}/${id}/sync/`,
        {}, // no data
        {
          headers: { ...getAuthHeaders() },
        }
      );

      return handleSuccess(response);
    } catch (error) {
      return handleError(error);
    }
  },
};

export default request;
