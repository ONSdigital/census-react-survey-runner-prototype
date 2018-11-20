import webpack from 'webpack';
import path from 'path';

export default {
    entry: [
        'babel-regenerator-runtime',
        path.resolve(__dirname, 'src/shared/')
    ],
    output: {
        path: path.resolve(__dirname, 'build/static'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
                PUBLIC_URL: JSON.stringify('http://localhost:5000'),
                WEBPACK: true
            }
        })
    ],
    resolve: {
        extensions: ['.js', '.json', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.jsx?/,
            use: {
                loader: 'babel-loader'
            },
            include: path.resolve(__dirname, 'src/shared')
        }]
    }
}