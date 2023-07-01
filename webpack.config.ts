const path = require('path');

module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            { // .ts and .tsx files are parsed using 'ts-loader'
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: ['*', '.tsx', '.ts', '.js', '.jsx'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};