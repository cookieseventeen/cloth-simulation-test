const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: {
    index: ['./src/assets/index.js', './src/assets/scss/main.scss']
  },
  target: 'web',
  output: {
    filename: 'assets/js/[name].js',
    chunkFilename: '[name].min.js',
    path: resolve(__dirname, 'build'),
    clean: true,
  },
  devtool: 'source-map',
  devServer: {
    contentBase: resolve(__dirname, 'build'),
    open: true,
    compress: true,
    hot: false,
    liveReload: true
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node-modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          }
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[name][ext]'
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../../'
            }
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                ident: 'postcss',
                plugins: [
                  require('postcss-preset-env')()
                ]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(otf|eot|ttf|woff2?)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/font/[name][ext]'
        }
      }

    ]
  },
  resolve: {
    alias: {
      '@img': resolve(__dirname, './src/assets/img'),
      '@font': resolve(__dirname, './src/assets/font'),
      '@core': resolve(__dirname, './src/assets/js/core')
    }
  },
  plugins: [
    new OptimizeCssAssetsWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: './assets/css/[name].css'
    }),
    new HtmlWebpackPlugin({
      chunks: ['index'],
      filename: `./index.html`,
      template: './src/index.html'
    }),

  ]
}