/********************** Dependencies **************************/
const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin'); // for index.html
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

/********************** Variables **************************/
const isDevelopment = process.env.NODE_ENV !== 'production';
let target = 'web'; // web is default value

const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin(),
  new HTMLWebpackPlugin({
    template: './src/index.html',
    favicon: './src/images/favicon.ico',
  }),
  new TerserPlugin(),
];

if (!isDevelopment) {
  target = 'browserslist';
}

if (process.env.SERVE | isDevelopment) {
  plugins.push(
    new ReactRefreshWebpackPlugin({
      overlay: false, // for this error (Wrong url scheme for WebSocket ) or install 0.5.0-rc.5
    })
  );
}

/********************** Config **************************/
module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  entry: './src/index.js', // not necessary
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // not necessary
    assetModuleFilename: 'images/[hash][ext][query]',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // /\.(js|jsx)$/
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(s[ac]|c)ss$/i, // /\.s?css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '' },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset',
      },
    ],
  },
  plugins,
  target,
  resolve: {
    extensions: ['.js', '.jsx'],
    // alias: {
    //   Components: path.resolve(__dirname, ".", "src", "components"),
    //   Main: path.resolve(__dirname, ".", "src", "components", "main"),
    //   Common: path.resolve(__dirname, ".", "src", "components", "common"),
    // },
  },
  devtool: 'source-map', // cheap-module-source-map
  devServer: {
    port: 3000,
    static: './dist',
    hot: true,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        minify: TerserPlugin.uglifyJsMinify,
        terserOptions: {},
      }),
    ],
  },
};
