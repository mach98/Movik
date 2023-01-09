import React, {FC, useContext} from 'react';
import {View, Text} from 'react-native';

import MoviesContext from '../../Context/moviesContext';

const GamesScreen: FC = () => {
  const value = useContext(MoviesContext);

  return (
    <View>
      <Text>{value}</Text>
    </View>
  );
};

export default GamesScreen;
