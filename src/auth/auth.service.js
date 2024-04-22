import axios from 'axios';

import { BASE_URL, API_BASE_URL } from '@/config/serverApiConfig';

export const login = async ({ loginData }) => {
  try {
    const response = await axios.post(BASE_URL + 'auth/jwt/create', loginData);

    console.log('**response', response);

    const { status, data } = response;

    return data;
  } catch (error) {
    console.log('**error', error);
    return {
      success: false,
      result: null,
      message: 'an error occured',
    };
  }
};

export const register = async ({ registerData }) => {
  try {
    const response = await axios.post(API_BASE_URL + 'register/', registerData);

    console.log('**response', response);

    return true;
  } catch (error) {
    console.log('**error', error);
    return false;
  }
};
