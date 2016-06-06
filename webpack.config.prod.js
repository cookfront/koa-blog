import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production'),
  __DEV__: false
};

export default {
    debug: true,
    devtool: 'source-map',
    noInfo: true,
    target: 'web',
    entry: __dirname + '/public/src/js/app.js',
    output: {
        path: __dirname + '/public/build',
        publicPath: 'http://localhost:3000/',
        filename: 'app_[hash].js',
        chunkFilename: '[name]_[chunkhash:8].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public/src/view/index.html')
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin(GLOBALS),
        new ExtractTextPlugin('app_[hash:8].css'),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'public/src'),
                loaders: ['babel']
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loaders: ['file']
            },
            {
                test: /(\.css|\.scss)$/,
                include: path.join(__dirname, 'public/src'),
                loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap')
            }
        ]
    }
};
