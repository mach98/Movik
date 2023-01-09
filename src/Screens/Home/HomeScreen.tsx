import {View, StyleSheet} from 'react-native';
import React, {FC, useState, useEffect, useContext} from 'react';

import MediaSection from '../../Components/MediaSection/MediaSection';
import MediaBanner from '../../Components/MediaBanner/MediaBanner';
import NavBar from '../../Components/Navbar/NavBar';

import data from '../../data/mockData';
import {randomiseBanner} from '../../Helper/ramdomiseBanner';
import {stripCommas} from '../../Helper/stripCommas';
import MoviesContext from '../../Context/moviesContext';

import styles from './HomeScreen.stylesheet';
import {Text} from 'react-native-paper';

interface IDataObject {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  Response: string;
  Images: string[];
}

interface IData {
  data: IDataObject[];
}

const HomeScreen: FC = () => {
  const [currentBanner, setCurrentBanner] = useState('');
  const [movieContent, setMovieContent] = useState<IDataObject[]>();
  //const [movieTitle, setMovieTitle] = useState('');

  const value = useContext(MoviesContext);

  //genre is coming as a string, separate them into an array
  //const [genre, setGenre] = useState([]);
  useEffect(() => {
    const val = randomiseBanner(data.length);
    setCurrentBanner(data[val].Poster);
    if (data) {
      // console.log(typeof data)
      setMovieContent(data);
    }
  }, [data]);

  return (
    <View style={styles.container}>
      <View>
        <NavBar />
        <MediaBanner poster={currentBanner} />
      </View>
      <MediaSection />
    </View>
  );
};

export default HomeScreen;
