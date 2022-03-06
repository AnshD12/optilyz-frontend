import { Dispatch, SetStateAction } from 'react';

import { IMovieCardProps } from './movieCard';

export interface IAppContext {
  data: IMovieCardProps[];
  totalNoOfPages: number;
  error: string;
  searchText: string;
  setData: Dispatch<SetStateAction<never[]>>;
  setTotalNoOfPages: Dispatch<SetStateAction<number>>;
  setError: Dispatch<SetStateAction<string>>;
  setSearchText: Dispatch<SetStateAction<string>>;
}
