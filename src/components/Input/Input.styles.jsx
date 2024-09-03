import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  input: {
    marginBottom: 15,
    backgroundColor: '#ffffff',
    borderRadius: 15,
  },

  labelContainer: {
    position: 'absolute',
  },

  label: {
    color: '#474B52',
    marginBottom: 3,
    fontSize: 16,
    fontWeight: '400',
    paddingStart: 15,
  },

  inputContainer: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    borderColor: '#E6E9EF',
    borderWidth: 1,
  },

  textInput: {
    flex: 1,
    paddingStart: 15,
    fontSize: 15,
    color: '#333333',
  },

  marginTextInput: {
    top: 10,
  },

  icon: {
    marginHorizontal: 18,
  },

  closeBtn: {
    height: '100%',
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  movedUp: {
    fontSize: 12,
    marginTop: 4,
  },
  movedDown: {
    fontSize: 16,
    lineHeight: 30,
  },

  error: {
    color: 'red',
    marginTop: 8,
    fontSize: 12,
    paddingStart: 15,
    paddingBottom: 10,
  },
});
