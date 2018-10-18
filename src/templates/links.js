import PropTypes from 'prop-types';
import React from 'react';

import Redirect from '../components/Redirect';

const Link = ({ pageContext: { url } }) => <Redirect target={url} />;

Link.propTypes = {
  pageContext: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Link;
