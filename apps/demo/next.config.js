const withPlugins = require('next-compose-plugins');
const css = require('@zeit/next-css');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [optimizedImages, {}],
  [css, { cssModules: false }],
]);
