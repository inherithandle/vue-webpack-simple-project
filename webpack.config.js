const path = require('path');

module.exports = {
  entry: './src/js/vue-first.js',
  output: {
    filename: 'todo.js',
    path: path.resolve(__dirname, 'dist')
  }
};
