import React from 'react';
import {TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

import {Image, Pressable, Text, View} from '@health/wrappers';
import {Icon} from '@health/components';

//styles
import styles from './ImageMessage.styles';
import mainStyles from '@health/constants/styles';

const ImageMessage = ({image, width, height, title, subtitle}) => {
  const [t] = useTranslation();

  return (
    <View style={styles.imageMessage}>
      <Image source={image} style={[styles.image, {width: width, height: height}]} />
      <Text center bold style={{fontSize: 20}}>{title}</Text>
      <Text center small style={{color: '#B3B3B3'}}>{subtitle}</Text>
    </View>
  );
};

export default ImageMessage;
