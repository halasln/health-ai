import React from 'react';
import {TouchableOpacity} from 'react-native';

const AppTouchableOpacity = ({children, onPress, style, hitSlop}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style} hitSlop={hitSlop ?? 5}>
      {children}
    </TouchableOpacity>
  );
};

export default AppTouchableOpacity;
