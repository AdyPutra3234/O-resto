const ImageminMozjpeg = require('imagemin-mozjpeg');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
          globOptions: {
            ignore: ['**/images/hero-image.jpg'],
          },
        },
        {
          from: path.resolve(__dirname, 'src/favicon.ico'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),

    new WebpackPwaManifest({
      name: 'O\'resto',
      short_name: 'O\'resto',
      description: 'List and detail of restaurant in indonesia WEB App',
      background_color: '#ddd',
      crossorigin: 'use-credentials',
      theme_color: '#FFA500',
      display: 'standalone',
      ios: {
        'apple-mobile-web-app-title': 'O\'resto',
        'apple-mobile-web-app-status-bar-style': '#FFA500',
      },
      start_url: '/index.html',
      icons: [
        {
          src: path.resolve('src/public/images/icons/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          type: 'image/png',
          purpose: 'any maskable',
          ios: true,
        },
      ],
    }),

    new ServiceWorkerWebpackPlugin({
      entry: path.resolve(__dirname, 'src/scripts/sw.js'),
    }),

    new ImageminWebpackPlugin({
      plugins: [
        ImageminMozjpeg({
          quality: 50,
          progressive: true,
        }),
      ],
    }),

    new BundleAnalyzerPlugin(),
  ],

  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 10000,
      maxSize: 50000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '-',
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
};
