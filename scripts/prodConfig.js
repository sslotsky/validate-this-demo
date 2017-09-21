const generate = apiBase => `
var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    js: './index.js',
    vendor: [
      'axios',
      'immutable',
      'pubsub-js',
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'react-violet-forms',
      'redux',
      'redux-form',
      'redux-resolver',
      'redux-thunk',
      'validate-this'
    ]
  },
  output: { path: __dirname + '/dist', filename: 'bundle.js' },
  devServer: {
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      use: ['babel-loader'],
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: ['css-loader', 'sass-loader']
      })
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.prod.html',
      filename: 'index.html',
      inject: false
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.bundle.js'
    }),
    new ExtractTextPlugin({
      filename: 'styles.css',
      allChunks: true
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        'API_BASE': JSON.stringify('${apiBase}')
      }
    })
  ]
}
`;

export default generate;
