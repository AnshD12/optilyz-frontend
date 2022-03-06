import { ISearchOmdbResult } from '../interfaces/searchOmdb';
import axios from 'axios';

export const searchOmdb = async (searchText: string, page: number): Promise<ISearchOmdbResult> => {
  try {
    const { data } = await axios.get(`http://www.omdbapi.com/?s=${searchText}&apikey=ca979c9e&page=${page}`);
    console.log('result', data);
    if (data.Response === 'True') {
      return {
        data: data.Search,
        response: data.Response,
        totalResults: data.totalResults,
        error: '',
      };
    }
    return {
      response: data.Response,
      error: data.Error,
      data: [],
      totalResults: 0,
    };
  } catch (error) {
    console.log('error', error);
    return {
      response: 'False',
      error: 'Unknown error occurred',
      data: [],
      totalResults: 0,
    };
  }
};
