import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify('development'),
    __DEV__: true
};

export default {
    debug: true,
    devtool: 'cheap-module-eval-source-map',
    noInfo: true,
    entry: {
        app: [
            'webpack-hot-middleware/client?reload=true',
            './public/src/app.js'
        ]
    },
    target: 'web',
    output: {
        path: __dirname + '/public/dist',
        publicPath: '/dist',
        filename: 'app.js',
        chunkFilename: '[name].js'
    },
    plugins: [
        new webpack.DefinePlugin(GLOBALS),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('style.css')
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
                test: /\.css$/,
                include: path.join(__dirname, 'public/src'),
                loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
            }
        ]
    }
};
