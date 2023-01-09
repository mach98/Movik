import React, {createContext} from 'react';

const MoviesContext = createContext();

export const MoviesProvider = ({children}) => {
  return (
    <MoviesContext.Provider value="Testing">{children}</MoviesContext.Provider>
  );
};

export default MoviesContext;
