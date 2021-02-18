const path = require('path')
const Dotenv = require('dotenv-webpack')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({template: "./src/index.html"}),
        new CleanWebpackPlugin(),
        new Dotenv()
    ],
    entry: {
        index: path.resolve(__dirname, 'src', 'index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].[hash].js"
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{loader: 'file-loader'}],
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader",
                "postcss-loader", "sass-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    }
}