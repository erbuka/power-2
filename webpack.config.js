const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    output: {
        path: path.resolve(__dirname, "docs")
    },
    entry: [
        "./src/js/main.js",
        "./src/js/polyfills.js",
    ],
    module: {
        rules: [
            { test: /\.(mp3)$/, use: "file-loader" },
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
            inject: "head",
        })
    ]
}