import { AppPagination, PaginationFooter } from './styles';
import React, { useContext } from 'react';

import AppContext from '../../AppContext';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@mui/styles';
import { searchOmdb } from '../../services/searchOmdb';

interface IProps {
  totalNoOfPages: number;
}

export const Pagination = ({ totalNoOfPages }: IProps) => {
  const useStyles = makeStyles(() => ({
    ul: {
      '& .MuiPaginationItem-root': {
        color: '#fff',
      },
    },
  }));
  const classes = useStyles();

  const { setData, searchText, setError } = useContext(AppContext);
  const handleChange = async (event: React.ChangeEvent<unknown>, value: number) => {
    try {
      const result = await searchOmdb(searchText, value);
      if (result.response === 'True') {
        setData(result.data);
      }
    } catch (error) {
      setError('Unknown Error occurred');
    }
  };
  return (
    <PaginationFooter>
      <Stack spacing={2}>{totalNoOfPages > 0 && <AppPagination classes={{ ul: classes.ul }} size="large" count={totalNoOfPages} color="primary" onChange={handleChange} />}</Stack>
    </PaginationFooter>
  );
};
