import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production'),
  __DEV__: false
};

export default {
    debug: true,
    devtool: 'source-map',
    noInfo: true,
    target: 'web',
    entry: __dirname + '/public/src/app.js',
    output: {
        path: __dirname + '/public/build',
        publicPath: '/',
        filename: 'app_[hash:8].js',
        chunkFilename: '[name]_[chunkhash:8].js'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin(GLOBALS),
        new ExtractTextPlugin('app.css'),
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
