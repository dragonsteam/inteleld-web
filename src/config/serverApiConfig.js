export const BASE_URL = import.meta.env.MODE === 'development' ? 'http://127.0.0.1:8000/' : '';
export const API_BASE_URL = BASE_URL + 'api/';

// export const API_BASE_URL =
//   import.meta.env.PROD || import.meta.env.VITE_DEV_REMOTE == 'remote'
//     ? 'api/'
//     : 'http://localhost:8000/api/';
// export const BASE_URL =
//   import.meta.env.PROD || import.meta.env.VITE_DEV_REMOTE ? '' : 'http://localhost:8000/';

// export const WEBSITE_URL = import.meta.env.PROD
//   ? 'http://cloud.idurarapp.com/'
//   : 'http://localhost:3000/';
// export const DOWNLOAD_BASE_URL =
//   import.meta.env.PROD || import.meta.env.VITE_DEV_REMOTE
//     ? import.meta.env.VITE_BACKEND_SERVER + 'download/'
//     : 'http://localhost:8000/download/';
// export const ACCESS_TOKEN_NAME = 'x-auth-token';

// export const FILE_BASE_URL = import.meta.env.VITE_FILE_BASE_URL;
