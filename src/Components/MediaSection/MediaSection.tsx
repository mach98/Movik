import React, {FC} from 'react';
import {FlatList, TouchableOpacity, View, StyleSheet} from 'react-native';
import MediaCard from '../MediaCard/MediaCard';
import data from '../../data/mockData';

const MediaSection: FC = () => {
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
  }
});

export default MediaSection;
