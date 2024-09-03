import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    borderRadius: 16,
    flexDirection: 'row',
    padding: 16,
    marginBottom:20
  },

  details: {
    flex: 1,
    justifyContent: 'space-around',
  },
  
  text:{
    fontSize:24
  },

  image: {
    height: 200,
    flex: 1,
    borderRadius: 30,
    overflow: 'hidden',
  },

  duration: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 8,
    width: 100,
    flexDirection: 'row',
  },

  time:{
    marginLeft: 10,
  }
});
