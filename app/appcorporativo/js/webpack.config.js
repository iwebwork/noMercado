const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
let config = {
   entry: {
     app: './src/index.js',
     home: './src/code/home.js',
     login: './src/code/login.js',
     estatistica: './src/code/estatistica.js',
   },
   plugins: [
     new CleanWebpackPlugin(['public/*']),
     new HtmlWebpackPlugin({
        title : 'Login',
        excludeChunks: ['home','estatistica'],
        filename: 'index.html',
        template: './src/template/index.html'
      }),
      new HtmlWebpackPlugin({
        title: 'Home',
        excludeChunks: ['login','estatistica'],
        filename: 'home.html',
        template: './src/template/home.html'
      }),
      new HtmlWebpackPlugin({
        title: 'Estatistica',
        excludeChunks: ['login','home'],
        filename: 'estatistica.html',
        template: './src/template/estatistica.html'
      }),
     new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: "commons.js"
    }),
   ],
   output: {
     filename: 'assets/js/[name].bundle.js',
     path: path.resolve(__dirname, 'public')
   },
   module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: [['es2015']]
                }
            },
            {
               test: /\.less$/,
               loaders: ['style-loader', 'css-loader', 'less-loader']
            },
            {
              test: /\.(woff|woff2|ttf|svg|eot)$/,
              loader: 'url-loader'
            }
        ]
    }
};

module.exports = config;
