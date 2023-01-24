import {View, Text} from 'react-native';
import styles from './MediaInfo.stylesheet';
import React, {FC} from 'react';
import {useRoute} from '@react-navigation/native';

const MediaInfo: FC = () => {
  const route = useRoute();
  const details = route.params;
  return (
    <View>
      <Text>{}</Text>
    </View>
  );
};

export default MediaInfo;
