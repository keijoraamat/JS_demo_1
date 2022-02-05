const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js"
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public')
        }
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: "./src/index.html",
                inject: "body",
                minify: false,
            }
        )
    ]
}