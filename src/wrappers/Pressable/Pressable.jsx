import React from 'react';
import {Pressable as RNPressable} from 'react-native';
import {createThemedComponent} from 'react-native-theming';

const Pressable = ({children, onPress, style, hitSlop}) => {
  const ThemedPressable = createThemedComponent(RNPressable);
  const isStyleArray = Array.isArray(style);

  return (
    <ThemedPressable onPress={onPress} style={style} hitSlop={hitSlop ?? 5}>
      {children}
    </ThemedPressable>
  );
};

export default Pressable;
