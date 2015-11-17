var path = require('path')

module.exports = {
  entry: [path.resolve('./tests/_entry.js')],
  output: {
    path: __dirname,
    filename: '_bundle.js'
  },
  resolve: {
    extensions: ['', '.js']
  }
}
