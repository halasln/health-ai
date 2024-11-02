import React from 'react';
import {Pressable, PressableProps} from 'react-native';

const AppPressable: React.FC<PressableProps> = ({children, ...props}) => {
  return <Pressable {...props}>{children}</Pressable>;
};

export default AppPressable;
