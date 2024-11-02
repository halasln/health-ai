import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    flex: 1,
    opacity: 0.5,
  },

  content: {
    flexDirection: 'row',
    marginTop: 20,
  },

  image: {
    height: 200,
    width: '100%',
    borderRadius: 30,
    overflow: 'hidden',
  },

  item: {
    padding: 8,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'grey',
    marginEnd: 10,
    marginBottom: 10,
  },

  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },

  selectedItem: {
    padding: 8,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'red',
    marginEnd: 10,
    marginBottom: 10,
  },

  selectedText: {
    color: 'red',
    textDecorationLine: 'line-through',
  },
});
