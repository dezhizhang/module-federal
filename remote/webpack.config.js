const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "build.js",
    publicPath:'http://localhost:3000'
  },
  devServer: {
    port: 3000,
    open: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options:{
            presets: ["@babel/preset-react"],
          }
        
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins:[
    new HtmlWebpackPlugin({
        template:'./public/index.html',
        inject:'body'
    }),
    new ModuleFederationPlugin({
        filename:'remoteEntry.js',
        name:'remote',
        exposes:{
            './NewList':'./src/NewList'
        }
    })
  ]
};
