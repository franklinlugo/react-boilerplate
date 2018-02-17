const path = require('path');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src/entries/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    devtool: 'eval-source-map',
    devServer: {
        port: 8000,
    },
    module: {
        rules: [
            {
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
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 1000000,
                        fallback: 'file-loader',
                        name: 'images/[name].[ext]',
                    }
                }
            },
        ]
    }
}
