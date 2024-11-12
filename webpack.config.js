const path = require('path');

module.exports = {

    entry: {
      main: './src/clientSeance.js', // Точка входа нашего приложения
    clientHall: './src/client_hall.js',
    clientPayment: './src/clientPayment.js',
    clientTicket: './src/clientTicket.js',
    },
    output: {
      filename: '[name].bundle.js',
      
      path: path.resolve(__dirname, 'dist')
    },
  mode: 'development', // или 'production', в зависимости от стадии разработки
  module: {
    rules: [
      {
        test: /\\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  }
};