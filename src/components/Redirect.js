import PropTypes from 'prop-types';
import { Component } from 'react';

class Redirect extends Component {
  propTypes = {
    target: PropTypes.string.isRequired,
  };

  componentDidMount() {
    const { target } = this.props;
    window.location.href = target;
  }

  render() {
    return null;
  }
}

export default Redirect;
