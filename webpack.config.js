const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
      'main': './src/index.js',
    },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
      rules: [
          {
              test: /\.(js|jsx)$/i,
              exclude: /node_modules/,
              loader: "babel-loader",
              options: { presets: ["@babel/env"] }
          },
          {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(jpg|png)$/i,
            loader: "url-loader",
        }
      ]
  },
  resolve: { 
      extensions: ["*", ".js", ".jsx"] 
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    static: {
        directory: path.join(__dirname, 'build'),
    },
    port: 9000,
  }
};