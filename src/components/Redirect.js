import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Redirect extends Component {
  propTypes = {
    target: PropTypes.string.isRequired,
  };

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

export default Redirect;
