var path = require('path');

var clientConfig = {
    entry: path.resolve(__dirname, "source/index.js"),
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, "client")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env', 'babel-preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
};

var serverConfig = {
    target: 'node',
    entry: path.resolve(__dirname, "server/index.js"),
    output: {
        filename: 'server.js',
        path: __dirname,
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env', 'babel-preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: {
                    loader: 'css-loader',
                    options: {
                        emitFile: false
                    }
                }
                
            }
        ]
    },
    optimization: {
        minimize: false
    }
}

module.exports = [clientConfig,serverConfig];