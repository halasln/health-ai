import LinearGradient from 'react-native-linear-gradient';

import {Text, TouchableOpacity} from '@src/wrappers';

import styles from './Button.styles';

const Button = ({title, onPress, green, secondary, style, textstyle}) => {
  const getColor = () => {
    if (green) return ['#16AA75', '#55E1AF'];
    else if (secondary) return ['#807D7D', '#8E8E90'];
    else return ['#ffffff', '#ffffff'];
  };

  const getTextColor = () => {
    if (green || secondary) return '#fff';
    else return '#222222';
  };

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <LinearGradient
        colors={getColor()}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 0}}
        style={[
          styles.button,
          green && styles.green,
          secondary && styles.secondary,
          style,
        ]}>
        <Text bold style={[styles.text, {color: getTextColor()}, textstyle]}>
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;
