import {getItem} from '@src/utils/storage';

//themes
import {light} from './light';
import {dark} from './dark';
export const themes = [light, dark];

const GetTheme = (theme: string) => {
  switch (theme) {
    case light?.info?.name:
      return light;
    case dark?.info?.name:
      return dark;
    default:
      return light;
  }
};

export const theme = GetTheme(getItem('theme') || light?.info?.name);
