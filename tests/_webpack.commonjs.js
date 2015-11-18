var path = require('path')

module.exports = {
  entry: [path.resolve('./src/index.js')],
  output: {
    path: path.join(__dirname, '../'),
    filename: 'vue-preload.js',
    libraryTarget: 'umd',
    library: 'vue-preload'
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style!css!postcss'
      }
    ]
  },
  postcss: function() {
    return [
      require('postcss-nested'),
      require('cssnext')()
    ]
  },
  target: 'node'
}
