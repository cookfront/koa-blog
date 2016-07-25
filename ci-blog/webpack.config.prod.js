import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import AssetsPlugin from 'assets-webpack-plugin';

const assetsPluginInstance = new AssetsPlugin({
    filename: 'assets.json',
    prettyPrint: true
});

const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify('production'),
    __DEV__: false
};

export default {
    debug: true,
    devtool: 'source-map',
    noInfo: true,
    entry: {
        app: './public/src/app.js'
    },
    target: 'web',
    output: {
        path: __dirname + '/public/dist',
        publicPath: '/dist/',
        filename: '[name]_[hash:8].js',
        chunkFilename: '[name]_[chunkhash:8].js'
    },
    plugins: [
        new WebpackMd5Hash(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin(GLOBALS),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('[name]_[contenthash:8].css'),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        assetsPluginInstance
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
