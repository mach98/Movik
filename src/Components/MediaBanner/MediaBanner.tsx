import React, {FC} from 'react';
import {View, Image} from 'react-native';

import styles from './MediaBanner.stylesheet';
import {IMediaBanner} from './MediaBanner.interface';

const MediaBanner: FC<IMediaBanner> = ({poster}) => {
  return (
    <View style={styles.banner}>
      <Image source={{uri: poster}} style={styles.bannerImg} />
    </View>
  );
};

export default MediaBanner;

//for banner randomise what will show on startup
//Math.Random * length of items
