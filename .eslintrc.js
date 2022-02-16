module.exports = {
  parser: 'babel-eslint',
  extends: ['yoctol', 'next'],
  env: {
    browser: true,
    node: true,
    jest: true,
    jasmine: true,
  },
  rules: {
    'react/prop-types': 'warn',
  },
};
