import { theme } from '@src/themes/theme';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: theme?.fontRegular,
    color: theme?.text,
  },

  bold: {
    fontWeight: theme?.fontBold,
  },

  xSmall: {
    fontSize: theme?.fontXSmall,
  },

  small: {
    fontSize: theme?.fontSmall,
  },

  left: {
    textAlign: 'left',
  },

  right: {
    textAlign: 'right',
  },

  center: {
    textAlign: 'center',
  },

  uppercase: {
    textTransform: 'uppercase',
  },
});
