import { notification } from 'antd';

export default function handleSuccess(response) {
  console.log('** response', response);

  const { status, statusText } = response;

  notification.config({
    duration: 7,
  });

  if (status > 200) {
    notification.success({
      message: statusText,
      description: 'Your request successfully completed.',
    });
  }

  return {
    success: true,
    result: response.data,
  };
}
