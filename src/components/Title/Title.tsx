import React from 'react';
import { View, Text, StyleProp, ViewStyle, TextStyle } from '@src/wrappers';
import styles from './Title.styles';

interface TitleProps {
  title: string;
  subtitle?: string;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
}

const Title: React.FC<TitleProps> = ({ 
  title, 
  subtitle, 
  style, 
  titleStyle 
}) => {
  return (
    <View style={[styles.header, style]}>
      <Text bold center style={[styles.title, titleStyle]}>
        {title}
      </Text>
      {subtitle && (
        <Text center small style={styles.subtitle}>
          {subtitle}
        </Text>
      )}
    </View>
  );
};

export default Title;