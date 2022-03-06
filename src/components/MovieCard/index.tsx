/* eslint-disable max-len */

import { CardContainer, CardContentContainer, MoviePoster, PosterContainer, Text, TextContainer } from './styles';

import { IMovieCardProps } from '../../interfaces/movieCard';
import React from 'react';

export const MovieCard = ({ Title, Poster, Year, Type }: IMovieCardProps) => {
  return (
    <CardContainer>
      <PosterContainer>{Poster !== 'N/A' ? <MoviePoster src={Poster} /> : <MoviePoster src="../noImage.png" />}</PosterContainer>
      <CardContentContainer>
        <TextContainer>
          <i>
            <Text>{Title}</Text>
          </i>
        </TextContainer>
        <TextContainer>
          <i>
            <Text>{Year}</Text>
          </i>
        </TextContainer>
        <TextContainer>
          <i>
            <Text>{Type}</Text>
          </i>
        </TextContainer>
      </CardContentContainer>
    </CardContainer>
  );
};
