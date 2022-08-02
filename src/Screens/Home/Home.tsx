import {View, StyleSheet} from 'react-native';
import React, {FC} from 'react';

import MediaSection from '../../Components/MediaSection/MediaSection';

const Home: FC = () => {
  return (
    <View style={styles.container}>
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

export default Home;
