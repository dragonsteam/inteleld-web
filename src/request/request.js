import axios from 'axios';

import { API_BASE_URL } from '@/config/serverApiConfig';
import getAuthHeaders from '@/auth/getAuthHeaders';
import handleSuccess from './handleSuccess';
import handleError from './handleError';

axios.defaults.baseURL = API_BASE_URL;

const request = {
  list: async ({ url, pagination }) => {
    try {
      const req_url = pagination ? `${url}/?page=${pagination.page}` : `${url}/`;
      const response = await axios.get(req_url, {
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
  update: async ({ entity, id, jsonData }) => {
    try {
      const response = await axios.patch(`${entity}/${id}/`, jsonData, {
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
