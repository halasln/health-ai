import { getItem } from '@src/utils/storage';
import axios from 'axios';

export const HttpClient = axios.create({
  baseURL: 'http:/192.168.100.216:4200/',
  // baseURL: 'https://healthai.the-xproject.com',
  timeout: 30000,
});

HttpClient.interceptors.request.use(
  config => {
    config.headers.Accept = 'application/json';
    config.headers['Content-Type'] = 'application/json';
    config.headers.Authorization=getItem('token');


    return config;
  },
   (error) =>{
    return Promise.reject(error);
  },
);


HttpClient.interceptors.response.use(
  response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  error => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);
