import {I18nManager} from 'react-native';
import RNRestart from 'react-native-restart';
import i18n from 'i18next';
import {storeData} from '@src/utils/storage';

export const changeLanguage = async lang => {
  if (lang == 'ar') {
    i18n.language = 'ar';
    I18nManager.allowRTL(true);
    I18nManager.forceRTL(true);
  } else {
    i18n.language = 'en';
    I18nManager.allowRTL(false);
    I18nManager.forceRTL(false);
  }

  await storeData('lang', lang);
  RNRestart.Restart();
};
