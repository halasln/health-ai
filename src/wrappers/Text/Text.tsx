import React from 'react';
import Theme from 'react-native-theming';

import styles from './Text.styles';

const Text = ({
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
    <Theme.Text
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
    </Theme.Text>
  );
};

export default Text;
