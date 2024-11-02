import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: '@fontRegular',
    color: '@text',
  },

  bold: {
    fontWeight: '@fontBold',
  },

  xSmall: {
    fontSize: '@fontXSmall',
  },

  small: {
    fontSize: '@fontSmall',
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
