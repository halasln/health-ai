import { Shadow } from '@src/constants';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  todayGoalCard: {
    padding: 25,
    borderRadius: 20,
    backgroundColor: '#fff',
    marginTop: 10,
    marginBottom: 40,

    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowRadius: 5,
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 4},

    elevation: 8,
  },

  dot: {
    width: 7,
    height: 7,
    borderRadius: 100,
    marginEnd: 7,
  },

  progressBarBg: {
    backgroundColor: '#DFDFDF',
    borderRadius: 50,
    flex: 1,
    marginTop: 5,
    marginBottom: 20,
  },

  progressBar: {
    height: 5,
    borderRadius: 50,
  },
});
