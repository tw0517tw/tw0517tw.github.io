module.exports = {
  parser: 'babel-eslint',
  extends: ['yoctol'],
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
