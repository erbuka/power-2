const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { GenerateSW } = require('workbox-webpack-plugin');
const path = require("path");

module.exports = {
    devServer: {
        host: '0.0.0.0',//your ip address
        port: 8080,
        disableHostCheck: true
    },
    output: {
        path: path.resolve(__dirname, "docs")
    },
    entry: [
        "./src/js/main.js",
        "./src/js/polyfills.js",
    ],
    module: {
        rules: [
            { test: /\.(mp3|ttf)$/, use: "file-loader" },
            { test: /\.html$/, use: "html-loader" },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
            inject: "head"
        }),
        new CopyPlugin({
            patterns: [
                { from: "./src/icons", to: "./icons" }
            ]
        }),
        new GenerateSW()
    ]
}