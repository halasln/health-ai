import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigations from '@src/navigations';
import React from 'react';
import ProvidersWrapper from './ProvidersWrapper';
const MainStack = createNativeStackNavigator();

const Main = () => {
  return (
    <ProvidersWrapper>
      <MainStack.Navigator screenOptions={{headerShown: false}}>
        {navigations.map(route => (
          <MainStack.Screen
            key={route.name}
            name={route.name}
            component={route.component}
          />
        ))}
      </MainStack.Navigator>
    </ProvidersWrapper>
  );
};

export default Main;
