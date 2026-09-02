import React from 'react';
import styledNormalize from 'styled-normalize';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
