import { StyleSheet } from "react-native";

export default StyleSheet.create({
  progressCard: {
    borderRadius: 25,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  info:{
    flex: 1,
  },

  title: {
    color: '#fff',
  },

  progress: {
    marginTop: 15,
    color: '#fff',
    marginBottom: 5,
  },

  mainClick: {
    height: 42,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },

  mainClickText:{
    color: '@primary'
  },

  backClick: {
    width: 42,
    height: 42,
    borderRadius: 200,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: 10,
  },
});