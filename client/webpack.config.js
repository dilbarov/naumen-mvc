const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = (env, argv) => ({
    entry: {
        app: ["./src/index.tsx"],
    },
    output: {
        filename: argv.mode === "production" ? "[name].[chunkhash].js" : "[name].js",
        chunkFilename: argv.mode === "production" ? "chunks/[name].[chunkhash].js" : "chunks/[name].js",
        path: path.resolve(__dirname, "dist"),
        publicPath: `/`,
    },
    mode: "none",
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    "classnames-loader",
                    "style-loader",
                    { loader: "css-loader", options: { modules: true } },
                    "less-loader"
                ],
                include: /src/,
            },
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(img|png|jpe?g|gif|svg|woff|woff2|eot)$/i,
                use: [
                    {
                        loader: "file-loader",
                    },
                ],
            },
        ],
    },
    devtool: argv.mode === "production" ? false : "source-map",
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: argv.mode, // use 'development' unless process.env.NODE_ENV is defined
            DEBUG: false,
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new MiniCssExtractPlugin({
            filename: argv.mode === "production" ? "[name].[contenthash].css" : "[name].css",
        }),
    ],
});
