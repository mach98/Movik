import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeStackNavigator from './HomeStackNavigator';
import GamesStackNavigator from './GamesStackNavigator';
import {Text} from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="home" size={30} color={focused ? 'red' : 'black'} />
          ),
          tabBarLabel: () => <Text>Home</Text>,
        }}
      />
      <Tab.Screen
        name="Games"
        component={GamesStackNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="gamepad" size={30} color={focused ? 'red' : 'black'} />
          ),
          tabBarLabel: () => <Text>Games</Text>,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
