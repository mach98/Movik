import {View, StyleSheet} from 'react-native';
import React, {FC, useState, useEffect} from 'react';

import MediaSection from '../../Components/MediaSection/MediaSection';
import MediaBanner from '../../Components/MediaBanner/MediaBanner';
import NavBar from '../../Components/Navbar/NavBar';

import data from '../../data/mockData';
import {randomiseBanner} from '../../Helper/ramdomiseBanner';

const HomeScreen: FC = () => {
  const [currentBanner, setCurrentBanner] = useState('');
  useEffect(() => {
    const val = randomiseBanner(data.length);
    setCurrentBanner(data[val].Poster);
  }, []);


  return (
    <View style={styles.container}>
      <View>
      <NavBar/>
      <MediaBanner poster={currentBanner}/>
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
