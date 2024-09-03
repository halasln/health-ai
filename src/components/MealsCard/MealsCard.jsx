import React from 'react';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

import {Text, View} from '@health/wrappers';

import styles from './MealsCard.styles';
import mainStyles from '@health/constants/styles';
import {ImageBackground} from 'react-native';

const MealsCard = ({
  image,
  calories,
  imageBackground,
  title,
  subtitle,
  progress,
  progressColor,
}) => {
  return (
    <View style={styles.mealsCard}>
      <View style={mainStyles.rowCenterY}>
        <View
          style={[styles.imageContainer, {backgroundColor: imageBackground}]}>
          <ImageBackground
            source={image}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.info}>
          <Text style={styles.title}>{title}</Text>

          <Text style={styles.subtitle}>{subtitle}</Text>

          <Text style={styles.calories}>{calories}</Text>
        </View>
      </View>
    </View>
  );
};

export default MealsCard;
