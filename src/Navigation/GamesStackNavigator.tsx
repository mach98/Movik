import React from 'react';
import GamesScreen from '../Screens/Games/GamesScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const GamesStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Games" component={GamesScreen} />
    </Stack.Navigator>
  );
};

export default GamesStackNavigator;
