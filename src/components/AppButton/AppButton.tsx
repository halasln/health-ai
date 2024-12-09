import React from 'react';
import {StyleProp, ViewStyle, TextStyle} from 'react-native';
import {AppPressable, Text} from '@src/wrappers';
import LinearGradient from 'react-native-linear-gradient';
import styles from './Button.styles';

interface AppButtonProps {
  title: string;
  onPress: () => void;
  green?: boolean;
  secondary?: boolean;
  style?: StyleProp<ViewStyle>;
  textstyle?: StyleProp<TextStyle>;
}

const AppButton: React.FC<AppButtonProps> = ({
  title,
  onPress,
  green = false,
  secondary = false,
  style,
  textstyle,
}) => {
  const colors = green
    ? ['#16AA75', '#55E1AF']
    : secondary
    ? ['#807D7D', '#8E8E90']
    : ['#ffffff', '#ffffff'];

  const textColor = green || secondary ? '#fff' : '#222222';

  return (
    <AppPressable
      activeOpacity={0.8}
      onPress={onPress}
      accessibilityLabel={title}
      accessibilityRole="button">
      <LinearGradient
        colors={colors}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 0}}
        style={[
          styles.button,
          green && styles.green,
          secondary && styles.secondary,
          style,
        ]}>
        <Text bold style={[styles.text, {color: textColor}, textstyle]}>
          {title}
        </Text>
      </LinearGradient>
    </AppPressable>
  );
};

export default AppButton;
