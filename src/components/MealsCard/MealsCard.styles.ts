import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mealsCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 15,
    overflow: 'hidden',
  },

  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginEnd: 10,

    justifyContent: 'center',
    alignItems: 'center',
  },

  info: {flexShrink: 1},
  image: {
    width: 100,
    height: 100,
  },

  title: {
    fontSize: 18,
    fontWeight: '@fontBold',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 13,
    color: '#A19B9B',
  },
});
