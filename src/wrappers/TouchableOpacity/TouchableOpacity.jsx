import React from 'react';
import {TouchableOpacity as RNTouchableOpacity} from 'react-native';
import {createThemedComponent} from 'react-native-theming';

const TouchableOpacity = ({children, onPress, style, hitSlop}) => {
  const ThemedTouchableOpacity = createThemedComponent(RNTouchableOpacity);

  return (
    <ThemedTouchableOpacity
      onPress={onPress}
      style={style}
      hitSlop={hitSlop ?? 5}>
      {children}
    </ThemedTouchableOpacity>
  );
};

export default TouchableOpacity;
