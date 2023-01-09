import {View, Text, FlatList} from 'react-native';
import data from '../../data/mockData';
import React from 'react';
import MediaSection from '../MediaSection/MediaSection';

export default function MediaList() {
  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={item => {
          return <MediaSection />;
        }}
      />
    </View>
  );
}
