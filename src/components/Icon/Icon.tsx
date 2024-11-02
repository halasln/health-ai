import {theme} from '@src/themes/theme';
import React from 'react';
import RNCustomIcon from './CustomIcon';

const Icon = ({name, color, size, style}) => {
  return (
    <RNCustomIcon
      name={name}
      color={color ? color : theme?.icon}
      size={size ?? 25}
      style={style}
    />
  );
};
export default Icon;
