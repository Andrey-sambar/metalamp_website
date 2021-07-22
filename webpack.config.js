const path = require('path')
const HTMLwebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        filename: '[contenthash].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 4200
    },
    plugins: [
        new HTMLwebpackPlugin({
            template: path.resolve(__dirname, 'src/index.pug'),
            filename: 'index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[contenthash].style.css'
        })
    ],
    module: {
        rules:[
            {
                test: /\.scss$/,
                use:[MiniCssExtractPlugin.loader,'css-loader','sass-loader']
            },
            {
                test: /\.pug$/,
                use:['pug-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use:['file-loader']
            }
        ]
    }
}