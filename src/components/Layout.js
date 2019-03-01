import PropTypes from 'prop-types';
import React from 'react';
import styledNormalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}`;

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
