const path = require('path')
const nodeExternals = require('webpack-node-externals');

module.exports = {
    // Bundle for nodejs
    target: 'node',
    // root
    entry: './src/index.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    // run babel
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: [
                    'react',
                    'stage-0', ['env', {
                        targets: {
                            browsers: ['last 2 versions']
                        }
                    }]
                ]
            }
        }],
    },
    externals: [nodeExternals()]
}