import { GlobalStyle, MainContainer } from './styles/global';

import { Header } from './components/Header';
import { MovieSearch } from './pages/Movie-Search';
// import { Pagination } from './components/AppPagination';
import React from 'react';

const App: React.FC = (): React.ReactElement => (
  <>
    <GlobalStyle />
    <Header />
    <MainContainer>
      <MovieSearch></MovieSearch>
    </MainContainer>
  </>
);

export default App;
