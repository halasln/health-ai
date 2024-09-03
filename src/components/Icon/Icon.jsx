import {Pressable} from '@health/wrappers';
import React from 'react';
import {createThemedComponent} from 'react-native-theming';
import RNCustomIcon from './CustomIcon';

const ThemedCustomIcon = createThemedComponent(RNCustomIcon, ['color']);


const Icon = ({name, color, size, style}) => {
  return (
    <ThemedCustomIcon
      name={name}
      color={color ? color : '@icon'}
      size={size ?? 25}
      style={style}
    />
  );
};
export default Icon;
