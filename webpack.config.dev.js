import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify('development'),
    __DEV__: true
};

export default {
    debug: true,
    devtool: 'cheap-module-eval-source-map',
    noInfo: true,
    target: 'web',
    entry: __dirname + '/public/src/js/app.js',
    output: {
        path: __dirname + '/public/build',
        publicPath: 'http://localhost:3000/js',
        filename: 'app.js',
        chunkFilename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public/src/view/index.html')
        }),
        new webpack.DefinePlugin(GLOBALS),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'public/src/js'),
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
