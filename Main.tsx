import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SafeAreaView } from '@health/wrappers';
import Providers from './Providers';

//styles
import themes from '@health/themes';
import { mainStyles } from '@health/constants';

//nvigations
import navigations from '@health/navigations';
const MainStack = createNativeStackNavigator();

const Main = () => {
  return (
    <Providers>
      {/* <SafeAreaView style={mainStyles.screenNoPadding}> */}
        <MainStack.Navigator screenOptions={{headerShown: false}}>
          {navigations.map(route => (
            <MainStack.Screen
              key={route.name}
              name={route.name}
              component={route.component}
            />
          ))}
        </MainStack.Navigator>
      {/* </SafeAreaView> */}
    </Providers>
  );
};

export default Main;
