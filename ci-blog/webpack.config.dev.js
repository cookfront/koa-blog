import webpack from 'webpack';
import path from 'path';

const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify('development'),
    __DEV__: true
};

export default {
    debug: true,
    devtool: 'cheap-module-eval-source-map',
    noInfo: true,
    entry: [
        'webpack-hot-middleware/client?reload=true',
        './public/src/app.js'
    ],
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
        new webpack.NoErrorsPlugin()
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
                loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
            }
        ]
    }
};
