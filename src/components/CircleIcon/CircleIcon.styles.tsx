import { Shadow } from '@vekelz/constants';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  circleIcon:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginEnd: 10,
  },

  circleIconBg: {
    width: 20,
    height: 20,
    backgroundColor: '@screen',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: 5,
  },
});
