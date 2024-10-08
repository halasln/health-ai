import {Platform} from 'react-native';

const Shadow = () => {
  return Platform.select({
    ios: {
      shadowColor: 'rgba(0, 0, 0, 0.5)',
      shadowRadius: 5,
      shadowOpacity: 1,
      shadowOffset: {width: 0, height: 4},
    },
    android: {
      elevation: 8,
      shadowColor: 'rgba(0, 0, 0, 0.5)',
    },
  });
};

export default Shadow;
