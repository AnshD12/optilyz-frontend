import React, { useContext } from 'react';

import AppContext from '../../AppContext';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import { SearchTextFieldContainer } from './styles';
import { searchOmdb } from '../../services/searchOmdb';

export const SearchTextField = () => {
  const { searchText, setSearchText, setData, setError, setTotalNoOfPages } = useContext(AppContext);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  const handleClick = async () => {
    try {
      const result = await searchOmdb(searchText, 1);
      if (result.response === 'True') {
        setError('');
        setData(result.data);
        setTotalNoOfPages(Math.ceil(result.totalResults / 10));
      }
      if (result.response === 'False') {
        setData([]);
        setTotalNoOfPages(0);
        setError(result.error);
      }
    } catch (error) {
      setError('unknown error occurred');
    }
  };
  return (
    <SearchTextFieldContainer>
      <Paper
        component="form"
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: 400,
        }}
      >
        <InputBase required value={searchText} onChange={handleChange} sx={{ ml: 1, flex: 1 }} placeholder="Search Movies or TV series" />
        <IconButton sx={{ p: '10px' }} aria-label="search" onClick={handleClick}>
          <SearchIcon />
        </IconButton>
      </Paper>
    </SearchTextFieldContainer>
  );
};
