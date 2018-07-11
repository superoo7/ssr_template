const path = require('path')
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

const config = {
    // Bundle for nodejs
    target: 'node',
    // root
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    externals: [nodeExternals()]
}

module.exports = merge(baseConfig, config)

const a = 1