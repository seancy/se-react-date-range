const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    entry: {
        index: './src/index.js',
        dateRange: './src/component.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        //libraryExport:'DateRange',
        //libraryTarget: 'commonjs2'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|build)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /(.scss|.css)$/,
                use: [
                    MiniCssExtractPlugin.loader,

                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
        ]
    },
    devServer: {
        port: 8081,
        contentBase: path.join(__dirname, 'dist'),
        watchOptions: {
            hot: true,
            watchContentBase: true,
            poll: true
        }
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({template: './src/index.html'})
    ]
}
