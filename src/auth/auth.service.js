import axios from 'axios';

import { BASE_URL } from '@/config/serverApiConfig';

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
