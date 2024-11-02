import CryptoJS from 'crypto-js';
import Config from 'react-native-config';
import {MMKV} from 'react-native-mmkv';
import app from './../../app.json';

const storage = new MMKV({
  id: `${app?.name}_storage`,
});

export const setItem = (key: string, value: any) => {
  try {
    const hashedKey = encryptKey(key);
    const encryptedValue = encryptItem(JSON.stringify(value));
    storage?.set(hashedKey, encryptedValue);
  } catch (err) {
    throw err;
  }
};

export const getItem = (key: string) => {
  try {
    const hashedKey = encryptKey(key);
    const encryptedValue = storage?.getString(hashedKey);
    return encryptedValue ? JSON.parse(decryptItem(encryptedValue)) : '';
  } catch (err) {
    throw err;
  }
};

export const removeItem = (key: string) => {
  try {
    const hashedKey = encryptKey(key);
    storage?.delete(hashedKey);
  } catch (err) {
    throw err;
  }
};

export const clearStorage = () => {
  try {
    storage?.clearAll();
  } catch (err) {
    throw err;
  }
};

const encryptItem = (value: any) => {
  try {
    return CryptoJS.AES.encrypt(value, Config?.ENCRYPTION_KEY || '').toString();
  } catch (err) {
    throw err;
  }
};

const decryptItem = (value: string) => {
  try {
    const bytes = CryptoJS.AES.decrypt(value, Config?.ENCRYPTION_KEY || '');
    const decryptedValue = bytes.toString(CryptoJS.enc.Utf8);
    return decryptedValue;
  } catch (err) {
    throw err;
  }
};

// Helper function to generate a consistent hash of the key
const encryptKey = (key: string) => {
  try {
    return CryptoJS.SHA256(key).toString();
  } catch (err) {
    throw err;
  }
};

export default storage;
