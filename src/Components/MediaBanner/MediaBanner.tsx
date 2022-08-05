import React, {FC, useState, useEffect} from 'react';
import {View, Text, Image,StyleSheet} from 'react-native';

import data from '../../data/mockData';
import { randomiseBanner } from '../../Helper/ramdomiseBanner';

const MediaBanner: FC = () => {

  const [currentBanner, setCurrentBanner] = useState("");
  useEffect(()=>{
    const val = randomiseBanner(data.length);
    setCurrentBanner(data[val].Poster);
  }, []);
  
  return (
    <View>
      <Image source={{uri:currentBanner}} style={{width:300, height:400}}/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default MediaBanner;


//for banner randomise what will show on startup
//Math.Random * length of items