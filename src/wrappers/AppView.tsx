import React, {ReactNode} from 'react';
import {View, ViewStyle} from 'react-native';

const AppView: React.FC<Props> = ({children, style}) => {
  return <View style={style}>{children}</View>;
};

export default AppView;

interface Props {
  children: ReactNode;
  style?: ViewStyle | ViewStyle[];
}
