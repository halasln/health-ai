import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from '@src/components';
import {bottomNavigations} from '@src/navigations';
import {theme} from '@src/themes/theme';
import {View} from '@src/wrappers';
const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <View style={{height: '100%'}}>
      <Tab.Navigator
        screenOptions={{
          tabBarHideOnKeyboard: true,
          tabBarItemStyle: {paddingVertical: 5},
          tabBarActiveTintColor: theme?.activeTintColor,
          tabBarInactiveTintColor: theme?.inactiveTintColor,
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
                  name={route?.icon}
                  color={
                    focused ? theme?.activeTintColor : theme?.inactiveTintColor
                  }
                  size={18}
                />
              ),
              tabBarOptions: {
                activeTintColor: theme?.activeTintColor,
                inactiveTintColor: theme?.inactiveTintColor,
              },
            }}
          />
        ))}
      </Tab.Navigator>
    </View>
  );
};

export default Home;
