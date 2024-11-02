import {getData} from '@health/utils/storage';

export const isAuth = async () => {
  const user = await getData('user');
  return user ? true : false;
};
