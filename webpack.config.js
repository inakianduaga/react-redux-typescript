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
    //publicPath: '/static/src/public/index.html'
    publicPath: '/static/'
  },
  devtool: 'cheap-eval-source-map', //alt 'source-map', 'eval'
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.ts(x)?$/,
        loaders: ['react-hot', 'babel-loader', 'ts-loader'],
        // include: path.join(__dirname, 'scr')
      },
      {
        test: /\.less$/,
        loader: "style!css?sourceMap!less?sourceMap=true"
      },
      {
        test: /\.css$/,
        loader: "style!css?sourceMap"
      },
      {
        test: /\.(woff|ttf|woff2|svg|eot)$/,
        loader: 'url?limit=100000'
      }

    ]
  }
}
