const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    entry:'./src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader', 
                    'css-loader', 
                    // {
                    //     loader: 'postcss-loader',
                    //     options: {
                    //         postcssOptions: {
                    //             plugins: [
                    //                 "postcss-preset-env",
                    //                 {
                    //                     browsers: 'last 2 versions'
                    //                 }
                    //             ]
                    //         }
                    //     }
                    // },
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
     
    resolve: {
        extensions: ['.ts', '.js']
    }
}