import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../Screens/Home/Home';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
  </Tab.Navigator>;
};

export default TabNavigator;
