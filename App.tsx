import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import BottomTabNavigator from './src/Navigation/BottomTabNavigator';

function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,  
  },
});

export default App;
