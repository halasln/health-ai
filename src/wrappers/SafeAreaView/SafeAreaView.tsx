import React from 'react';
import {SafeAreaView, SafeAreaViewProps} from 'react-native-safe-area-context';
import styles from './SafeAreaView.styles';

const AppSafeAreaView: React.FC<SafeAreaViewProps> = ({
  children,
  style,
  edges,
}) => {
  return (
    <SafeAreaView
      style={[styles.view, style]}
      edges={edges ?? ['right', 'left', 'top']}>
      {children}
    </SafeAreaView>
  );
};

export default AppSafeAreaView;
