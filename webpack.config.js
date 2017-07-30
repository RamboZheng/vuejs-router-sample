var path = require('path')
var webpack = require('webpack')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var env = require("./config/env.js")
var entry = require("./config/entry.js")

console.log("=============================================================");
console.log("openDebug="+env.openDebug);
console.log("serverUrl="+env.serverUrl);
console.log("=============================================================");

module.exports = {
    //devtool: '#source-map',
    entry: {},
    output: {
        filename: '[name].icity.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.js$/,
                enforce: "pre",
                exclude: /node_modules/,
                use: [{loader: "jshint-loader"}]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'jquery$': 'jquery/dist/jquery.slim.min.js',
            env: path.join(__dirname, "./config/env.js")
        }
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                jshint: {
                    'esversion': 6
                }
            }
        }),
        new CopyWebpackPlugin([{
            from: __dirname + '/res/*'
        }]),
        new webpack.optimize.CommonsChunkPlugin('icommon'),
        new ExtractTextPlugin("istyle.css"),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
}

//########################################################
var jsEntryMap = {}
var htmlEntryMap = []
for(var i=0; i<entry.entryFiles.length; i++) {
    var item = entry.entryFiles[i];
    
    if(item.js != undefined) {
        var jsname = path.basename(item.js, ".js");
        jsEntryMap[jsname] = item.js;
    }
    if(item.css != undefined) {
        var cssname = path.basename(item.css).replace(".", "");
        jsEntryMap[cssname] = item.css;
    }

    var htmlname = path.basename(item.html);
    htmlEntryMap[i] = new HtmlWebpackPlugin({
        filename: htmlname,
        template: './src/view/'+htmlname,
        hash: true,
        inject: 'body',
        chunks: ['icommon', jsname],
        css: ['']
    });
}
module.exports.entry = jsEntryMap;
module.exports.plugins = module.exports.plugins.concat(htmlEntryMap)