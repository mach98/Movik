import {View, StyleSheet} from 'react-native';
import React, {FC} from 'react';

import MediaSection from '../../Components/MediaSection/MediaSection';
import MediaBanner from '../../Components/MediaBanner/MediaBanner';
import NavBar from '../../Components/Navbar/NavBar';

const HomeScreen: FC = () => {
  return (
    <View style={styles.container}>
      <View>
      <NavBar/>
      <MediaBanner/>
      </View>
      <MediaSection/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'column',
  },
});

export default HomeScreen;
