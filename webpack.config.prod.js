const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

require('@babel/polyfill');

const htmlPlugin = new HtmlWebpackPlugin({
    title: 'MusicPreview.',
    inject: false,
    template: './src/index.ejs',
    appMountId: 'root',
    mobile: true,
    meta: [],
    scripts: [],
});

module.exports = {
    entry: ['@babel/polyfill', './src/index.js'],
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js'],
        alias: {
            components: path.resolve(__dirname, './src/components'),
            reducers: path.resolve(__dirname, './src/reducers'),
            utils: path.resolve(__dirname, './src/utils'),
            constants: path.resolve(__dirname, './src/constants'),
            assets: path.resolve(__dirname, './src/assets'),
            containers: path.resolve(__dirname, './src/containers'),
            actions: path.resolve(__dirname, './src/actions'),
            services: path.resolve(__dirname, './src/services'),
        },
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    plugins: [htmlPlugin],
};
