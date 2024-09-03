import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {View, Text} from '@health/wrappers';
import { Icon } from '@health/components';

import {bottomNavigations} from '@health/navigations';
import { getCurrentTheme } from 'react-native-theming';
const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <View style={{height: '100%'}}>
      <Tab.Navigator
        screenOptions={{
          tabBarHideOnKeyboard: true,
          tabBarItemStyle: {paddingVertical: 5},
          tabBarActiveTintColor: getCurrentTheme().def.activeTintColor,
          tabBarInactiveTintColor: getCurrentTheme().def.inactiveTintColor,
        }}>
        {bottomNavigations.map(route => (
          <Tab.Screen
            key={route.name}
            name={route.name}
            component={route.component}
            options={{
              headerShown: false,
              tabBarLabel: route.label,
              tabBarIcon: ({focused, color}) => (
                <Icon
                  name={route.icon}
                  color={
                    focused
                      ? getCurrentTheme().def.activeTintColor
                      : getCurrentTheme().def.inactiveTintColor
                  }
                  size={18}
                />
              ),
              tabBarOptions: {
                activeTintColor: getCurrentTheme().def.activeTintColor,
                inactiveTintColor: getCurrentTheme().def.inactiveTintColor,
              },
            }}
          />
        ))}
      </Tab.Navigator>
    </View>
  );
};

export default Home;
