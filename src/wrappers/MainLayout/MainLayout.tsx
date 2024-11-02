import React from 'react';
import {SafeAreaView, View} from '@src/wrappers';

//styles
import styles from './MainLayout.styles';

const MainLayout = ({children, noPadding, style}) => {
  return (
    <SafeAreaView style={[styles.main, noPadding && styles.noPadding, style]}>{children}</SafeAreaView>
  );
};

export default MainLayout;
