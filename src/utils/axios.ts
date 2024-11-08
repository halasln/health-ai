import axios from 'axios';
import {I18nManager} from 'react-native';
import { getItem} from './storage';

export const apiLink = 'http:/192.168.100.20:3500/';
export const apiLink2 = 'https://user-api-2u24875412.health.com/v5/';

export const post = async (url, data = new FormData()) => {

  let token = await getItem('user_t');
  let lang = I18nManager.isRTL ? 'ar' : 'en';

  token && data.append('token', token);
  data.append('lang', lang)

  return await axios({
    method: 'POST',
    url: apiLink + url,
    data: data,
    validateStatus: () => true,
    headers: {
      Accept: 'application/json, text/plain, /',
      'Content-Type': 'multipart/form-data',
    },
  })
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
};

export const put = async (url, data = new FormData()) => {
  
  let token = await getItem('user_t');
  let lang = I18nManager.isRTL ? 'ar' : 'en';

  token && data.append('token', token);
  data.append('lang', lang);

  return await axios({
    method: 'PUT',
    url: apiLink + url,
    data: data,
    validateStatus: () => true,
    headers: {
      Accept: 'application/json, text/plain, /',
      'Content-Type': 'multipart/form-data',
    },
  })
    .then(response => {
      return response;
    })
    .catch(error => {
      console.log(error);
    });
};

export const get = async (url, params = {}) => {
  
  let token = await getItem('user_t');
  let lang = I18nManager.isRTL ? 'ar' : 'en';

  token && (params.token = token);
  params.lang = lang;

  return await axios({
    method: 'GET',
    url: apiLink + url,
    params: params,
    validateStatus: () => true,
  })
    .then(response => {
      return response;
    })
    .catch(error => {
      console.log(error);
    });
};

export const remove = async (url, params = {}) => {
  
  let token = await getItem('user_t');
  let lang = I18nManager.isRTL ? 'ar' : 'en';

  token && data.append('token', token);
  data.append('lang', lang);

  return await axios({
    method: 'DELETE',
    url: apiLink + url,
    params: params,
    validateStatus: () => true,
  })
    .then(response => {
      return response;
    })
    .catch(error => {
      console.log(error);
    });
};

export const postOld = async (url, data = new FormData()) => {
  let token = await getData('user_t');
  let lang = I18nManager.isRTL ? 'ar' : 'en';

  token && data.append('token', token);
  data.append('lang', lang);

  return await axios({
    method: 'POST',
    url: apiLink2 + url,
    data: data,
    validateStatus: () => true,
    headers: {
      Accept: 'application/json, text/plain, /',
      'Content-Type': 'multipart/form-data',
    },
  })
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
};

export const putOld = async (url, data = new FormData()) => {
  let token = await getData('user_t');
  let lang = I18nManager.isRTL ? 'ar' : 'en';

  token && data.append('token', token);
  data.append('lang', lang);

  return await axios({
    method: 'PUT',
    url: apiLink2 + url,
    data: data,
    validateStatus: () => true,
    headers: {
      Accept: 'application/json, text/plain, /',
      'Content-Type': 'multipart/form-data',
    },
  })
    .then(response => {
      return response;
    })
    .catch(error => {
      console.log(error);
    });
};

export const getOld = async (url, params = {}) => {
  let token = await getData('user_t');
  let lang = I18nManager.isRTL ? 'ar' : 'en';

  token && (params.token = token);
  params.lang = lang;

  return await axios({
    method: 'GET',
    url: apiLink2 + url,
    params: params,
    validateStatus: () => true,
  })
    .then(response => {
      return response;
    })
    .catch(error => {
      console.log(error);
    });
};

export const removeOld = async (url, params = {}) => {
  let token = await getData('user_t');
  let lang = I18nManager.isRTL ? 'ar' : 'en';

  token && data.append('token', token);
  data.append('lang', lang);

  return await axios({
    method: 'DELETE',
    url: apiLink2 + url,
    params: params,
    validateStatus: () => true,
  })
    .then(response => {
      return response;
    })
    .catch(error => {
      console.log(error);
    });
};
