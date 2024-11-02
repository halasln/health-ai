import React from 'react';
import {Text} from 'react-native';
import styles from './AppText.styles';

const AppText = ({
  children,
  style,
  numberOfLines,
  ellipsizeMode,
  bold,
  xSmall,
  small,
  left,
  right,
  center,
  uppercase,
}) => {
  return (
    <Text
      style={[
        styles.text,
        style,
        bold && styles.bold,
        xSmall && styles.xSmall,
        small && styles.small,
        left && styles.left,
        right && styles.right,
        center && styles.center,
        uppercase && styles.uppercase,
      ]}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}>
      {children}
    </Text>
  );
};

export default AppText;
