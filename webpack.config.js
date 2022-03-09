const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { dirname } = require('path')

module.exports = {
    // which file to start with
    entry: './src/index.js',
    // bundled file path
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })]
}