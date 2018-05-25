var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var util = require('./config/utility');

module.exports = {
    entry: {
        'polyfills': './deps/polyfills.ts',
        'vendor': './deps/stdpkgs.ts',
        'app': './app/main.ts'
    },
    output: {
        path: util.root('.'),
        filename: '[name].[chunkhash].js',
        chunkFilename: '[id].[chunkhash].chunk.js'
    },
    module: {
        rules: [{
            test: /\.ts$/,
            loaders: [{
                loader: 'awesome-typescript-loader',
                query: {
                    tsconfig: './tsconfig.json'
                  }
            },
                'angular2-template-loader'
            ]
        }, {
            test: /\.html$/,
            loader: 'html-loader',
            query: {
                ignoreCustomFragments: [/\{\{.*?}}/],
                root: util.root('./app'),
                attrs: ['img:src', 'img:ng-src']
            }
        }
        ]
    },
    plugins: [

        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core/,
            util.root('./app')
          ),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'polyfills', 'manifest'],
            minChunks: Infinity
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.HashedModuleIdsPlugin(),


        new HtmlWebpackPlugin({
            template:'./index.html'
        }),
         new ExtractTextPlugin({
            filename: '[name].[contentHash].css',
            allChunks: true
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default'],
           })
    ],
    resolve: {
        extensions: ['.ts', '.js']
    },
    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        compress: true,
        inline: true,
        port: 8282
    }
};

