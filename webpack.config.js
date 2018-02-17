const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = (env) => {
    const plugins = [
        new ExtractTextPlugin("css/[name].css")
    ]

    if (env.NODE_ENV === 'production') {
        plugins.push(
            new CleanWebpackPlugin(['dist'], {
                root: __dirname
            })
        )
    }

    return {

        entry: {
            main: path.resolve(__dirname, 'src/entries/index.js'),
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'js/[name].js',
            publicPath: path.resolve(__dirname, 'dist'),
        },
        module: {
            rules: [{
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react'],
                    }
                },
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: 'css-loader',
                        options: {
                            minimize: true,
                        }
                    }]
                })
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        fallback: 'file-loader',
                        name: 'images/[name].[ext]',
                    }
                }
            },
            ]
        },
        plugins
    }
}