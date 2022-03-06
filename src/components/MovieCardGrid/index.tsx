/* eslint-disable max-len */
import React, { useContext } from 'react';

import AppContext from '../../AppContext';
import { Grid } from '@mui/material';
import { MovieCard } from '../MovieCard';
import { MovieCardGridContainer } from './styles';
import { Pagination } from '../Pagination';

export const MovieCardGrid = () => {
  const { data, totalNoOfPages } = useContext(AppContext);
  return (
    <MovieCardGridContainer>
      <Grid container spacing={1}>
        {data?.map((searchListitem, index) => {
          return (
            <Grid item key={index} xs={3}>
              <MovieCard key={index} Title={searchListitem.Title} Poster={searchListitem.Poster} Year={searchListitem.Year} Type={searchListitem.Type} />
            </Grid>
          );
        })}
      </Grid>

      <Pagination totalNoOfPages={totalNoOfPages} />
    </MovieCardGridContainer>
  );
};
