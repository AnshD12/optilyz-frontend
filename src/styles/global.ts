import { Container } from '@mui/material';
import { createGlobalStyle } from 'styled-components';
import { styled } from '@mui/system';

export const MainContainer = styled(Container)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const GlobalStyle = createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      outline:0;
      box-sizing:border-box;
  }
  #root{
      margin:0 auto;
      background-color: #212121;
      height: 100vh;
  }
`;
