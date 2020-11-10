/*
 * Copyright (c) 2020. Mikael Lazarev
 */

const path = require('path');
const {
  override,
  addBabelPlugins,
  babelInclude,
  addWebpackModuleRule,
} = require('customize-cra');

module.exports = override(
  ...addBabelPlugins(
    '@babel/plugin-transform-flow-strip-types',
    '@babel/plugin-proposal-class-properties',
      '@babel/plugin-transform-react-jsx'
  ),
  addWebpackModuleRule({
    test: /\.ttf$/,
    loader: 'file-loader',
    include: path.resolve(__dirname, './static/media/[name].[ext]'),
  }),
  addWebpackModuleRule({
    test: /\.(gif|jpe?g|png|svg)$/,
    use: {
      loader: 'url-loader',
      options: {
        name: '[name].[ext]',
        esModule: false,
      },
    },
  }),

  babelInclude([
    path.resolve(__dirname, 'node_modules/react-native-elements'),
    path.resolve(__dirname, 'node_modules/react-native-vector-icons'),
    path.resolve(__dirname, 'node_modules/react-native-gesture-handler'),
    path.resolve(__dirname, 'node_modules/react-native-ratings'),
    path.resolve(__dirname, 'node_modules/rn-mobile-components'),
    path.resolve(__dirname, 'node_modules/react-native-snap-carousel'),
    path.resolve(__dirname, 'node_modules/react-native-markdown-display'),
    path.resolve(__dirname, 'node_modules/react-native-gifted-chat'),
    path.resolve(__dirname, 'node_modules/react-native-lightbox'),
    path.resolve(__dirname, 'node_modules/react-native-parsed-text'),
    path.resolve(__dirname, 'node_modules/react-native-typing-animation'),
    path.resolve(__dirname, 'src'),
  ]),
);
