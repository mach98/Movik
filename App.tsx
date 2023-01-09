import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import BottomTabNavigator from './src/Navigation/BottomTabNavigator';

import {MoviesProvider} from './src/Context/moviesContext';

function App() {
  return (
    <MoviesProvider>
      <SafeAreaView style={styles.safeArea}>
        <NavigationContainer>
          <BottomTabNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </MoviesProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;
