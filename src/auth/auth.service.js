import axios from 'axios';
import handleError from '@/request/handleError';

import { BASE_URL, API_BASE_URL } from '@/config/serverApiConfig';

export const login = async ({ loginData }) => {
  try {
    const response = await axios.post(BASE_URL + 'auth/jwt/create', loginData);

    console.log('**auth response', response);

    const { status, data } = response;

    return {
      success: true,
      result: data,
    };
  } catch (error) {
    return handleError(error);
  }
};

export const register = async ({ registerData }) => {
  try {
    const response = await axios.post(API_BASE_URL + 'register/', registerData);

    console.log('**response', response);

    return true;
  } catch (error) {
    return handleError(error);
  }
};
