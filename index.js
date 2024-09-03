import React from 'react';
import {AppRegistry, LogBox} from 'react-native';
import Main from './Main';
import {name as appName} from './app.json';
import { NavigationContainer } from '@react-navigation/native';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //

const App =() => {
  return (
  <NavigationContainer>
    <Main />
  </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => App);
