import { notification } from 'antd';

export default function handleSuccess(response) {
  console.log('** response', response);

  return {
    success: true,
    result: response.data,
  };
}
