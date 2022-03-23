const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = (_, argv) => {
    const mode = argv.mode;
    const isDevelopment = mode === 'development';

    return {
        mode: 'development',
        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-react', '@babel/preset-env'],
                            plugins: ['@babel/plugin-transform-runtime', isDevelopment && require('react-refresh/babel')].filter(Boolean),
                        },
                    },
                },
                {
                    test: /\.scss$/,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                },
                {
                    test: /\.(png|svg|jpe?g|gif)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                        },
                    ],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 
                './public/index.html'
            }),
            isDevelopment && new ReactRefreshWebpackPlugin(),
        ].filter(Boolean),
        devServer: {
            port: 1000,
            hot: true
        },
    }
}