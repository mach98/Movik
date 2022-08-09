import React, {FC, useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { Card } from 'react-native-paper';


import data from '../../data/mockData';
import {randomiseBanner} from '../../Helper/ramdomiseBanner';

const MediaBanner: FC = () => {
  const [currentBanner, setCurrentBanner] = useState('');
  useEffect(() => {
    const val = randomiseBanner(data.length);
    setCurrentBanner(data[val].Poster);
  }, []);

  return (
    <View style={styles.banner}>
      <Image source={{uri: currentBanner}} style={styles.bannerImg} />
    </View>
  );
};

const styles = StyleSheet.create({
  banner:{
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5
  },
  bannerImg: {
    width: '96%', 
    height: 350, 
  }
});

export default MediaBanner;

//for banner randomise what will show on startup
//Math.Random * length of items
