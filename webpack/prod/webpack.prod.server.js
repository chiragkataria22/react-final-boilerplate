const { merge } = require('webpack-merge');
const baseConfig = require('../webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');
const path = require('path');
const ROOT_DIR = path.resolve(__dirname, '../../');
const resolvePath = (...args) => path.resolve(ROOT_DIR, ...args);
const BUILD_DIR = resolvePath('dist');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const serverConfig = {
  target: 'node',
  mode: 'production',
  name: 'server',
  entry: {
    server: './src/server/index.tsx',
  },
  resolve: {
    ...baseConfig.resolve,
  },
  module: {
    ...baseConfig.module,
    rules: [
      {
        test: /\.(css|less|styl|scss|sass|sss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash:8].css',
      ignoreOrder: true,
    }),
  ],
  output: {
    path: BUILD_DIR,
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    chunkFilename: 'chunks/[name].js',
    assetModuleFilename: 'assets/[hash][ext][query]',
  },
  externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, serverConfig);
