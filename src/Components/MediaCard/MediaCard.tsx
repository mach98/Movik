import React, {FC} from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {MediaCardProps} from './MediaCard.interface';

const MediaCard: FC<MediaCardProps> = props => {
  return (
    <TouchableOpacity>
      <View>
        <Image source={{uri: props.imageSource}} />
      </View>
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default MediaCard;
