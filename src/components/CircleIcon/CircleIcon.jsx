import React from 'react';

import {View, Text} from '@health/wrappers';
import {Icon} from '@health/components';

import styles from'./CircleIcon.styles'

const CircleIcon = ({icon, label, iconBg, iconColor, labelColor}) => {
  return (
    <View style={styles.circleIcon}>
      <View style={styles.circleIconBg}>
        <Icon name={icon} size={10} color={iconColor ?? '@text'} />
      </View>
      <Text small>
        {label}
      </Text>
    </View>
  );
};
export default CircleIcon;
