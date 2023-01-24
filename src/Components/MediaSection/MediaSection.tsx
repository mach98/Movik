import React, {FC} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import MediaCard from '../MediaCard/MediaCard';
import data from '../../data/mockData';
import styles from './MediaSection.stylesheet';
import {IMediaSection} from './MediaSection.interface';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParamsList} from '../../Navigation/HomeStackNavigator';

const MediaSection: FC<IMediaSection> = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamsList>>();
  return (
    <View style={styles.section}>
      <FlatList
        horizontal
        data={data}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <TouchableOpacity>
              <MediaCard
                poster={item.Poster}
                title={item.Title}
                navigation={() =>
                  navigation.navigate('MediaInfo', {
                    Title: item.Title,
                  })
                }
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default MediaSection;
