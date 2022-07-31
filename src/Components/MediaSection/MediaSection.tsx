import React, {FC} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import MediaCard from '../MediaCard/MediaCard';
import data from '../../data/mockData';

const MediaSection: FC = () => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => {
        return (
          <TouchableOpacity>
            <MediaCard imageSource={item.Images[0]} title={item.Title} />
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default MediaSection;
