import React, {FC} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { Card } from 'react-native-paper';

import { IMediaBanner } from './MediaBanner.interface';

const MediaBanner: FC<IMediaBanner> = ({poster}) => {
  return (
    <View style={styles.banner}>
      <Image source={{uri: poster}} style={styles.bannerImg} />
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
    resizeMode: 'cover'
  }
});

export default MediaBanner;

//for banner randomise what will show on startup
//Math.Random * length of items
