import Toast from 'react-native-toast-message';

export const showToast = (title, message, type, position) => {
  Toast.show({
    type: type || 'error',
    text1: title,
    text2: message,
    position: position || 'top',
    bottomOffset: 50,
    topOffset: 50,
  });
};