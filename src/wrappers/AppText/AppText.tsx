import React from 'react';
import {Text, TextProps} from 'react-native';
import styles from './AppText.styles';

const AppText: React.FC<AppTextProps> = ({
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

interface AppTextProps extends TextProps {
  children: string;
  numberOfLines?: number;
  style?:any;
  ellipsizeMode?:any;
  bold?: boolean;
  xSmall?: boolean;
  small?: boolean;
  left?: boolean;
  right?: boolean;
  center?: boolean;
  uppercase?: boolean;
}
