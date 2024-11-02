import React from 'react';
import {SafeAreaView as RNSafeAreaView} from 'react-native-safe-area-context';
import {createThemedComponent} from 'react-native-theming';

//styles
import styles from './SafeAreaView.styles';
const ThemedSafeView = createThemedComponent(RNSafeAreaView);

const SafeAreaView = ({children, style, edges}) => {
  return (
    <ThemedSafeView style={[styles.view, style]} edges={edges ?? ['right', 'left', 'top']}>{children}</ThemedSafeView>
  );
}

export default SafeAreaView;