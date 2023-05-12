const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
const filename = (ext) => isDev ? `[name].${ext}` : `[name].${ext}`

module.exports = {
    stats: {
        warnings: false
    },
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: `./${filename('js')}`,
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        allowedHosts: 'all',
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, 'dist'),
          },
        open: true,
        compress: true,
        hot: true,
        port: 80,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html',
            chunks: ['index'],
            minify: {
                collapseWhitespace: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new CleanWebpackPlugin()
    ],
    module: {
      rules: [
            {
                test: /\.scss$/,
                use: [
                MiniCssExtractPlugin.loader,
                  'css-loader',
                  'sass-loader'
                ]
            },
            {
              test: /\.css$/,
              use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                  name: "[name].[ext]",
                  outputPath: "assets/",
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      [
                        '@babel/preset-env',
                        {
                          useBuiltIns: 'usage',
                          corejs: '3.30.2'
                        }
                      ]
                    ]
                  }
                }
            },
      ],
    }
}