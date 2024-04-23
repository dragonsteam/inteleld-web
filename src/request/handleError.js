import { notification } from 'antd';

export default function handleError(error) {
  console.log('***error', error);

  const { message, response } = error;
  const { data: resData, status, statusText } = response || {};

  notification.config({
    duration: 15,
    maxCount: 1,
  });

  if (!navigator.onLine) {
    notification.error({
      message: 'No internet connection',
      description: 'Cannot connect to the Internet, Check your internet network',
    });
  } else if (!response) {
    notification.config({
      duration: 20,
      maxCount: 1,
    });
    // Code to execute when there is no internet connection
    notification.error({
      message: 'Problem connecting to server',
      description: 'Cannot connect to the server, Try again later',
    });
  } else {
    notification.error({
      message: message + ' - ' + statusText,
      description: resData?.detail,
    });
  }

  return {
    success: false,
    result: resData,
  };
}
