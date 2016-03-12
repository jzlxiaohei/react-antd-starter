var path = require('path');
var webpack = require('webpack');


module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        bundle:[
            'webpack-hot-middleware/client?reload=true',
            './src/index'
        ]
    },
    output: {
        path: path.join(__dirname, 'static'),
        filename: '[name].js?v=[hash]',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                include: path.join(__dirname, 'src')
            },
            { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },
            {
                test: /\.styl$/,
                loader: 'style-loader!css-loader!stylus-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {test: /\.(png|jpg|gif)$/, loader: 'url-loader'}
        ]
    },
    externals:{
        "jquery":"jquery",
        "react-dom":"ReactDOM",
        "react":"React",
        "rx-lite":"Rx",
        //"antd":"antd"
    }
};