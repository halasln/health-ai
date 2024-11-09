import React from 'react';
import {View, ViewProps} from 'react-native';

const AppView: React.FC<Props> = ({children, ...props}) => {
  return <View {...props}>{children}</View>;
};

export default AppView;

interface Props extends ViewProps {}
