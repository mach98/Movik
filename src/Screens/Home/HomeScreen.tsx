import {View, StyleSheet} from 'react-native';
import React, {FC} from 'react';

import MediaSection from '../../Components/MediaSection/MediaSection';
import MediaBanner from '../../Components/MediaBanner/MediaBanner';

const HomeScreen: FC = () => {
  return (
    <View style={styles.container}>
      <MediaBanner/>
      <MediaSection />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    flex: 1,
  },
});

export default HomeScreen;
