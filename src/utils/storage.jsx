import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {}
};

export const getData = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    
    return jsonValue !== null ? JSON.parse(jsonValue) : null;
  } catch (e) {}
};

export const removeData = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {}
};

export const clearStorage = async key => {
  try {
    await AsyncStorage.clear(key);
  } catch (e) {}
};

export const mergeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.mergeItem(key, jsonValue);
  } catch (e) {}
};