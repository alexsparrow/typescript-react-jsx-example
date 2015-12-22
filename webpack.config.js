var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack')
module.exports = {
  resolve: {
    // .js is required for react imports.
    // .tsx is for our app entry point.
    // .ts is optional, in case you will be importing any regular ts files.
    extensions: ['', '.js', '.ts', '.tsx']
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      // Set up ts-loader for .ts/.tsx files and exclude any imports from node_modules.
      test: /\.tsx?$/,
      loaders: ['babel', 'ts'],
      exclude: /node_modules/,
    },
    { test: /\.scss$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
    },
    {
       test: /\.less$/,
       loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
     },

  { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" }

  ]
  },
  output: {
        filename: "[name].js",
        chunkFilename: "[id].js",
        publicPath: '/static/',
        path:  require("path").resolve("./static")
    },
  entry: {
    app: ['./index.tsx', 'webpack-hot-middleware/client?reload=true']
  },
  // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
    plugins: [
        new ExtractTextPlugin("[name].css"),
        new webpack.HotModuleReplacementPlugin()
    ]
};
