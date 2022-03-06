import {AppHeader, Logo, LogoContainer} from './styles';

import React from 'react';

export const Header = () => {
  return (
    <AppHeader>
      <LogoContainer>
        <Logo src='../optilyz.svg'></Logo>
      </LogoContainer>
    </AppHeader>
  );
};
