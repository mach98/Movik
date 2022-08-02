import React, {FC} from 'react';
import {View, TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import {MediaCardProps} from './MediaCard.interface';

const MediaCard: FC<MediaCardProps> = props => {
  return (
    <View style={styles.card}>
      <TouchableOpacity>
        <View>
          <Image style={styles.poster} source={{uri: props.poster}} />
        </View>
        {/* <Text>{props.title}</Text> */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    fontSize: 20,
    margin: 5,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  poster: {
    width: 100,
    height: 150,
    borderRadius: 5,
  },
});

export default MediaCard;
