import {View} from 'react-native';
import React, {FC, useState, useEffect} from 'react';

import MediaSection from '../../Components/MediaSection/MediaSection';
import MediaBanner from '../../Components/MediaBanner/MediaBanner';
import NavBar from '../../Components/Navbar/NavBar';

import {IDataObject} from './HomeScreen.interface';
import data from '../../data/mockData';
import {randomiseBanner} from '../../Helper/ramdomiseBanner';
import {stripCommas} from '../../Helper/stripCommas';

import styles from './HomeScreen.stylesheet';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {BottomTabStackParamsList} from '../../Navigation/BottomTabNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParamsList} from '../../Navigation/HomeStackNavigator';

// export type HomeScreenNavigationProp = CompositeNavigationProp<
//   BottomTabNavigationProp<BottomTabStackParamsList, 'Home'>,
//   NativeStackNavigationProp<HomeStackParamsList>
// >;

export interface IData {
  data: IDataObject;
}

const HomeScreen: FC<IData> = () => {
  //const navigation =useNavigation<NativeStackNavigationProp<HomeStackParamsList>>();
  const [currentBanner, setCurrentBanner] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [poster, setPoster] = useState<string>('');

  //genre is coming as a string, separate them into an array
  //const [genre, setGenre] = useState([]);
  useEffect(() => {
    const val = randomiseBanner(data.length);
    setCurrentBanner(data[val].Poster);
    // if (data) {
    //   // console.log(typeof data)
    //   setMovieContent(data);
    // }
  }, [data]);

  return (
    <View style={styles.container}>
      <View>
        <NavBar />
        <MediaBanner poster={currentBanner} />
      </View>
      <MediaSection category={category} poster={poster} />
    </View>
  );
};

export default HomeScreen;
