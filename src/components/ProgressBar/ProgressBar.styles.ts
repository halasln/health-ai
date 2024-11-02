import { StyleSheet } from "react-native";

export default StyleSheet.create({
  prograssBarContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },

  prograssBg: {
    flex: 1,
    height: 5,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: 'rgba(255,255,255, .2)',
    marginEnd: 5,
  },

  prograssBar: {
    width: '0%',
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
  },

  prograssText: {
    color: '@green',
  },
});