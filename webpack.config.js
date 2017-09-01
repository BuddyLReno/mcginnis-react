const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const entry = './app/index.js';
const output = {
  path: path.resolve(__dirname, 'dist'),
  filename: 'index_bundle.js',
  publicPath: '/'
};

const modules = {
  rules: [
    { test: /\.(js)$/, use: 'babel-loader' },
    {
      test: /\.(scss|sass|css)$/i,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader',
          'resolve-url-loader',
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      })
    }
  ]
};

const devServer = {
  historyApiFallback: true
};

const plugins = [
  new HtmlWebpackPlugin({
  template: 'app/index.html'
}),
new ExtractTextPlugin('application.css'),
new ManifestPlugin({
      publicPath: './dist/',
      writeToFileEmit: true
    })
];

module.exports = {
  entry,
  output,
  module: modules,
  devServer,
  plugins
}
