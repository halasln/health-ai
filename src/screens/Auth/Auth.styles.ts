import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  auth: {
    flex: 1,
    backgroundColor: '@screen',
    padding: 15,
    paddingBottom: 50,
    paddingTop: 60,
    backgroundColor: 'rgba(0,0,0,.7)',
    justifyContent: 'space-between',
    position: 'relative',
  },

  clock: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  clockTitle: {
    color: '#D8D7D8',
    fontSize: 80,
  },

  clockSubtitle: {
    color: '#D8D7D8',
    marginBottom: 10,
  },

  logo: {
    height: 140,
  },

  terms:{
    marginTop: 20,
    color: '#fff',
  },
});
