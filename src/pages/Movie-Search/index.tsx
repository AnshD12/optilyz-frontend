import { MovieSearchContainer, SearchAlert } from './styles';
import React, { useState } from 'react';

// import { Alert } from '@mui/material';
import AppContext from '../../AppContext';
import { MovieCardGrid } from '../../components/MovieCardGrid';
import { SearchTextField } from '../../components/SearchTextField';

export const MovieSearch = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [totalNoOfPages, setTotalNoOfPages] = useState(0);
  const [searchText, setSearchText] = useState('');
  return (
    <AppContext.Provider value={{ searchText, data, setData, error, setSearchText, setError, totalNoOfPages, setTotalNoOfPages }}>
      <MovieSearchContainer>
        <SearchTextField />
        {error.length > 0 && <SearchAlert severity="error">{error}</SearchAlert>}
        <MovieCardGrid />
      </MovieSearchContainer>
    </AppContext.Provider>
  );
};
