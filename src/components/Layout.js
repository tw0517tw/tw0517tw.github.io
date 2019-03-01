import React from 'react';
import styledNormalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}`;

export default ({ children }) => (
  <>
    <GlobalStyle />
    {children}
  </>
);
