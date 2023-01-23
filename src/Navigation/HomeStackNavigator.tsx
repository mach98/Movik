import React from 'react';
import HomeScreen from '../Screens/Home/HomeScreen';
import MediaInfo from '../Screens/MediaInfo/MediaInfo';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {IDataObject} from '../Screens/Home/HomeScreen.interface';

export type HomeStackParamsList = {
  Home: undefined;
  MediaInfo: IDataObject;
};
const Stack = createNativeStackNavigator<HomeStackParamsList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="MediaInfo" component={MediaInfo} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
