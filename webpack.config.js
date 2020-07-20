const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development', //development
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        // publicPath: path.resolve(__dirname, 'public/assets')
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        port: 8088,
        hot: true
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true
                },
            },
        },
    },
    plugins: [
        // new CopyPlugin({
        //     patterns: [{
        //         from: 'src',
        //         to: path.resolve(__dirname, '/public')
        //     }, ],
        //     options: {
        //         concurrency: 100,
        //     },
        // }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader'],
            },
        ],
    }
};