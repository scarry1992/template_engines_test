var webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        publicPath: '/assets/',
        path: path.resolve(__dirname, 'public')
    },
    resolve: {
        extensions: ['.js', '.pug', '.mustache']
    },
    module: {
        loaders: [
            {
                test: /\.mustache$/,
                include: /mustache_templates/,
                loader: 'mustache-loader'
            },
            {
                test: /\.pug$/,
                include: /pug_templates/,
                loader: 'pug-loader'
            },
            {
                test: /\.json$/,
                include: /data/,
                loader: 'file-loader?name=[name].[ext]'
            }
        ]
    },
    watch:true
};