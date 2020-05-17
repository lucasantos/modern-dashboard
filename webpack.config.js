const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    //mode: 'production', //development
    entry: './src/main.ts',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: __dirname + '/public',
        port: 8088,
        hot: true
    },
    plugins: [
        new CopyPlugin({
            patterns: [{
                from: 'src',
                to: __dirname + '/public'
            }, ],
            options: {
                concurrency: 100,
            },
        }),
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".json"]
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }],
    }
};