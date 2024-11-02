import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  activityCard: {
    padding: 25,
    borderRadius: 20,
    backgroundColor: '#fff',
    marginTop: 10,
    marginBottom: 40,
    overflow: 'hidden',
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

  container: {
    height: 200,
    backgroundColor: '#F5F5F5',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginVertical: 20,
    paddingTop: 8,
    paddingLeft: 8,
  },

  bar: {
    bottom: 0,
    backgroundColor: '#6495ED',
    marginRight: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  xAxis: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  xAxisLabel: {
    position: 'absolute',
    bottom: 0,
    fontSize: 12,
  },
});
