import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  summaryCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 15,
  },

  imageContainer: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginEnd: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 45,
    height: 45,
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
