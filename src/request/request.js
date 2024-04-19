import axios from 'axios';
import { API_BASE_URL } from '@/config/serverApiConfig';

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

      console.log('* list response', response);

      return response.data;
    } catch (error) {
      console.log('***error', error);
      return undefined;
    }
  },
};

export default request;
