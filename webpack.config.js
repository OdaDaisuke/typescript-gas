"use strict";
exports.__esModule = true;
var path = require("path");
var GASPlugin = require("gas-webpack-plugin");
var PROJECT_ROOT = __dirname;
var SRC_DIR = path.resolve(PROJECT_ROOT, 'src');
var OUT_DIR = path.resolve(PROJECT_ROOT, 'dist');
function getEntry() {
    var names = [
        'sample',
    ];
    var entry = {};
    names.forEach(function (n) {
        entry[n] = path.resolve(SRC_DIR, n);
    });
    return entry;
}
var config = {
    mode: 'development',
    context: SRC_DIR,
    devtool: false,
    entry: getEntry(),
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "awesome-typescript-loader"
            },
        ]
    },
    output: {
        path: OUT_DIR,
        filename: '[name].js'
    },
    plugins: [
        new GASPlugin(),
    ],
    resolve: {
        extensions: ['.ts', '.js']
    }
};
exports["default"] = config;
