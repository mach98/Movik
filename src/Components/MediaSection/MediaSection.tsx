import React, {FC} from 'react';
import {FlatList, TouchableOpacity, View, StyleSheet} from 'react-native';
import MediaCard from '../MediaCard/MediaCard';
import data from '../../data/mockData';
import { IMediaBanner } from '../MediaBanner/MediaBanner.interface';


const MediaSection: FC<IMediaBanner> = () => {
  return (
    <View style={styles.section}>
    <FlatList
      horizontal
      data={data}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => {
        return (
          <TouchableOpacity>
            <MediaCard poster={item.Poster} title={item.Title} />
          </TouchableOpacity>
        );
      }}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    
  }
});

export default MediaSection;
