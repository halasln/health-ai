import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

const AppPressable: React.FC<TouchableOpacityProps> = ({
  children,
  hitSlop,
  ...props
}) => {
  return (
    <TouchableOpacity hitSlop={hitSlop ?? 5} {...props}>
      {children}
    </TouchableOpacity>
  );
};

export default AppPressable;
