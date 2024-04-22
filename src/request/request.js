import axios from 'axios';

import { API_BASE_URL } from '@/config/serverApiConfig';
import handleSuccess from './handleSuccess';
import handleError from './handleError';

axios.defaults.baseURL = API_BASE_URL;

const getAuthHeaders = (appendAuth) => {
  const auth = localStorage.getItem('auth');
  if (!appendAuth || !auth) return {};
  const auth_data = JSON.parse(auth);
  return {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + auth_data.current.tokens.access,
  };
};

const request = {
  list: async ({ entity, options = {} }) => {
    try {
      const authHeaders = getAuthHeaders(true);

      const response = await axios.get(entity + '/', {
        headers: { ...authHeaders },
      });

      return handleSuccess(response);
    } catch (error) {
      return handleError(error);
    }
  },
  create: async ({ entity, data }) => {
    try {
      const authHeaders = getAuthHeaders(true);

      const response = await axios.post(entity + '/', data, {
        headers: { ...authHeaders },
      });

      return handleSuccess(response);
    } catch (error) {
      return handleError(error);
    }
  },
  delete: async ({ entity, id }) => {
    try {
      const authHeaders = getAuthHeaders(true);

      const response = await axios.delete(entity + '/' + id, {
        headers: { ...authHeaders },
      });

      return handleSuccess(response);
    } catch (error) {
      return handleError(error);
    }
  },
};

export default request;
