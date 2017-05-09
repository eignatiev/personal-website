'use strict';

import webpack from 'webpack';
import {resolve} from 'path';

module.exports = {
    context: resolve(__dirname, 'frontend'),
    entry: {
        website: [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            './website.js'
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: resolve(__dirname, 'public'),
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.sass'],
        modules: [resolve(__dirname, 'frontend'), 'node_modules']
    },
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        contentBase: resolve(__dirname, 'public'),
        publicPath: '/'
    },
    module: {
        rules: [
            {test: /\.jsx?$/, use: ['babel-loader'], exclude: /node_modules/},
            {test: /\.sass$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            {test: /\.ttf$/, use: ['file-loader']},
            {test: /\.svg$/, use: ['babel-loader', 'svg-react-loader']}
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ]
};
