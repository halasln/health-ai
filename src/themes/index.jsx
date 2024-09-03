import {createTheme} from 'react-native-theming';

import {light} from './light';
import {dark} from './dark';

export default themes = [
  createTheme(light, 'light'),
  createTheme(dark, 'dark'),
];
