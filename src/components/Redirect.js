import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Redirect extends Component {
  componentDidMount() {
    const { target } = this.props;
    window.location.href = target;
  }

  render() {
    const { target } = this.props;

    return (
      <div>
        Redirecting to [<a href={target}>{target}</a>] ...
      </div>
    );
  }
}

Redirect.propTypes = {
  target: PropTypes.string.isRequired,
};

export default Redirect;
