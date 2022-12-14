const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';


// const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';



const config = {
    entry: './src/main/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "dfcore.js"
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         template: 'index.html',
    //     }),
    // ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/', '/dist/', '/types/'],
            },
            // {
            //     test: /\.css$/i,
            //     use: [stylesHandler,'css-loader'],
            // },
            // {
            //     test: /\.s[ac]ss$/i,
            //     use: [stylesHandler, 'css-loader', 'sass-loader'],
            // },
            // {
            //     test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
            //     type: 'asset',
            // },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', /*'.jsx', '.js', */'...'],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';

        // config.plugins.push(new MiniCssExtractPlugin());


        // config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());

    } else {
        config.mode = 'development';
    }
    return config;
};
