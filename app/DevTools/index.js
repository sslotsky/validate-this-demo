/* eslint global-require: "off" */

if (process.env.NODE_ENV === 'development') {
  module.exports = require('./DevTools');
} else {
  module.exports = () => false;
}
