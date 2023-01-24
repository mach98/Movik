import React, {FC} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {IMediaCardProps} from './MediaCard.interface';
import styles from './MediaCard.stylesheet';

const MediaCard: FC<IMediaCardProps> = ({poster, data, navigation}) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={navigation}>
        <View>
          <Image style={styles.poster} source={{uri: poster}} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MediaCard;
