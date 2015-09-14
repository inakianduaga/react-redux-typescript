var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './src/app.tsx',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool: 'source-map', //alt 'source-map', 'eval'
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        //supresses warnings, usually from module minification
        warnings: false
      }
    }),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    preLoaders: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'tslint',
        include: [path.resolve(__dirname, "src")],
        exclude: [path.resolve(__dirname, 'node_modules')]
      },
    ],
    loaders: [
      {
        test: /\.ts(x)?$/,
        loaders: ['ts-loader'],
        // include: path.join(__dirname, 'scr')
      }
    ]
  }
}
