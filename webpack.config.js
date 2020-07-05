const {getEnv} = require("./config/commonTools");

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

require('colors')

process.traceDeprecation = true

console.log(`config loaded successful, process.env = ${process.env.NODE_ENV}`.blue);

const runConf = {}
let plugins = []

if (process.env.MODE === "analyze") {
    // console.log(`config loaded successful, process.MODE = ${process.env.MODE}`.red);
    plugins.push(
        new BundleAnalyzerPlugin()
    )
}

if (process.env.MODE) {
    console.log(`config loaded successful, process.MODE = ${process.env.MODE}`.red);
}

const {isDev, isProd} = getEnv()

console.log(`isDev: ${isDev}`.bgGreen.black)
console.log(`isProd: ${isProd}`.bgGreen.black)

const PATHS = {
    src: path.join(__dirname, "./src"),
    dist: path.join(__dirname, "./dist"),
    components: path.join(__dirname, "./src/components"),
};

if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV);
}

function resolve(dir) {
    return path.join(__dirname, ".", dir);
}

plugins = [
    new HtmlWebpackPlugin({
        template: `./public/index.html`,
        filename: `index.html`,
        favicon: './public/favicon.ico',
        inject: true,
    }),
    new CleanWebpackPlugin(["dist"], {
        verbose: true,
        beforeEmit: true
        // dry: true
        // dry: isProd ? false : true
    }),
    new MiniCssExtractPlugin({
        filename: "css/[name].css",
    }),

];


module.exports = {

    stats: {
        builtAt: false,
        children: false,
        cachedAssets: false,
        chunks: false,
        excludeAssets: [
            // 'filter',
            // 'tpl',
            // /filter/,
            // (assetName) => assetName.contains('tpl')
        ],
        entrypoints: false,
        logging: false
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    name: 'vendors911',
                    test: /node_modules/,
                    chunks: 'all',
                    enforce: true
                },
                styles: {
                    name: 'vendors911',
                    test: /node_modules\/.\.(sa|sc|c)ss$/,
                    chunks: 'all',
                    enforce: true,
                },
            }
        }
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [resolve(__dirname, './src'), 'node_modules'],
        alias: { // usade in import
            src: path.resolve(__dirname, './src'),
            components: path.resolve(__dirname, './src/components'),
            fixtures: path.resolve(__dirname, './src/fixtures'),
            assets: path.resolve(__dirname, './src/assets'),
            'react-dom': '@hot-loader/react-dom',
        }
    },
    mode: process.env.NODE_ENV,
    entry: {
        init: ['./init.js'], // for Live Reload
    },
    devtool: isProd ? false : "inline-source-map",

    devServer: {
        historyApiFallback: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
        },
    },
    output: {
        path: resolve("dist"),
        publicPath: isProd ? 'http://glass-front.web.local.domain/' : '/',
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg)$/,
                loader: 'file-loader',
                options: {
                    limit: 10000,
                    name: ('assets/img/[name].[ext]')
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                // exclude: /\.(main.css)/i,
                use: [
                    isProd ? {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                modules: true
                            }
                        } :
                        {
                            loader: 'style-loader',
                            options: {
                                sourceMap: true
                            },
                        },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        },
                    },
                ]
            },
            {
                test: /\.js?$/,
                // exclude: /node_modules/,
                include: path.join(__dirname, 'src'),
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                // "react-hot",
                                // '@babel/env', '@babel/react'
                                // "@babel/preset-react",
                                "@babel/react",
                            ]
                        },
                    },
                ],
            },
            {
                test: /\.pug$/,
                loader: "pug-loader",
                options: {
                    pretty: true
                }
            },
            {
                test: /\.jsx?$/,
                include: PATHS.components,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "@babel/react",
                            ]
                        },
                    },
                ],
            },
            {
                test: /\.(eot|woff2?|svg|ttf)$/,
                loader: 'file-loader',
                options: {
                    limit: 10000,
                    name: ('fonts/[name].[ext]')
                    // name: ('fonts/[name].[ext]?[hash]')
                }
            },
        ]
    },
    plugins: plugins
};
