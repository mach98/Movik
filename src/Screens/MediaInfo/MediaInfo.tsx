import {View, Text} from 'react-native';
import styles from './MediaInfo.stylesheet';
import React, {FC} from 'react';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamsList } from '../../Navigation/HomeStackNavigator';
import {IMediaInfo} from './MediaInfo.interface';

const MediaInfo: FC<IMediaInfo> = (props,{navigation,route}) => {
  //const route = useRoute();
  //const details = route.params;
  //const navigation =useNavigation<NativeStackNavigationProp<HomeStackParamsList>>();
  const {Title}=props.route.params.item
  return (
    <View>
      <Text>{Title}</Text>
    </View>
  );
};

export default MediaInfo;
