const webpack = require('webpack')
      path = require('path')
      HtmlWebpackPlugin = require('html-webpack-plugin')
      CleanWebpackPlugin = require('clean-webpack-plugin')
      WebpackMd5Hash = require('webpack-md5-hash')
      MiniCssExtractPlugin = require("mini-css-extract-plugin")
      CopyWebpackPlugin = require('copy-webpack-plugin')

const config = {
  entry: [
    'font-awesome/scss/font-awesome.scss',
    './src/app.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].[chunkhash].js",
    publicPath: '/',
  },
  devServer: {
    port: 3000,
    host: '192.168.1.118'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      hash: true,
      template: './src/view/template.pug'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
    }),
    new WebpackMd5Hash(),
    new CleanWebpackPlugin('dist', {}),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      tether: 'tether',
      Tether: 'tether',
      'window.Tether': 'tether',
      Popper: ['popper.js', 'default'],
      'window.Tether': 'tether',
    }),
    new CopyWebpackPlugin([
      {
        from: './src/favicon.svg',
        to: './'
      },
      {
        from: './src/favicon.png',
        to: './'
      },
      {
        from: './src/img',
        to: './img'
      },
      {
        from: './src/CNAME',
        to: './'
      },
      {
        from: './src/ReadMe.md',
        to: './'
      },
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ['pug-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', 
          MiniCssExtractPlugin.loader, 
          'css-loader', 
          'postcss-loader', 
          'sass-loader'
        ],
      },
      {
        test: /bootstrap\/dist\/js\/umd\//,
        use: 'imports-loader?jQuery=jquery'
      },
      {
        test: /font-awesome\.config\.js/,
        use: [
          { loader: 'style-loader' },
          { loader: 'font-awesome-loader' }
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg|webp)$/i,
        use: [
          `file-loader?name=img/[name].[ext]`,
          {
            loader: 'image-webpack-loader',
            options: {
              disable: false, // webpack@2.x and newer
              mozjpeg: {
                progressive: true,
                quality: 70
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: true,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 50
              }
            },
          },
        ],
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]" },
      { test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader?name=fonts/[name].[ext]" }
    ]
  }
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {

  }
  if (argv.mode === 'production') {

  }
  return config;
}