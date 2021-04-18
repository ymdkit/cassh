const path = require('path')
const nodeExternals = require('webpack-node-externals')
const Dotenv = require('dotenv-webpack')

module.exports = {
  mode: "development",
  entry: {
    main: './src/index.ts',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: [
      '.ts', '.js',
    ],
  },
  target: 'node',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app-build.js'
  },
  externals: [nodeExternals()],
  plugins: [
    new Dotenv({
      systemvars: true,
    }),
  ]
};