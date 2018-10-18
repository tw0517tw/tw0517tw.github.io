const path = require('path');

const links = require('./content/links');

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  links.forEach(link => {
    createPage({
      path: link.name,
      component: path.resolve('./src/templates/links.js'),
      context: {
        // Data passed to context is available in page queries as GraphQL variables.
        name: link.name,
        url: link.url,
      },
    });
  });
};
