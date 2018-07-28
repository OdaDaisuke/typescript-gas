import * as webpack from 'webpack'
import * as path from 'path'
import GASPlugin = require('gas-webpack-plugin')

const PROJECT_ROOT = __dirname
const SRC_DIR = path.resolve(PROJECT_ROOT, 'src')
const OUT_DIR = path.resolve(PROJECT_ROOT, 'dist')


function getEntry() {
    const names = [
        'sample',
    ]

    const entry: {[key:string]:string} = {}
    names.forEach((n) => {
        entry[n] = path.resolve(SRC_DIR, n)
    })

    return entry
}


const config: webpack.Configuration = {
    mode: 'development',
    context: SRC_DIR,
    devtool: false,
    entry: getEntry(),
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "awesome-typescript-loader",
            },
        ],
    },
    output: {
        path: OUT_DIR,
        filename: '[name].js',
    },
    plugins: [
        new GASPlugin(),
    ],
    resolve: {
        extensions: ['.ts', '.js'],
    },
};

export default config
