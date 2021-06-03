const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CracoLessPlugin = require('craco-less');
const theme = require('./theme');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.entry = {
        main: [
          './src/index.tsx',
        ],
        content: [
          './src/content/index.tsx',
        ],
        background: [
          './src/background/index.ts'
        ]
      }
      webpackConfig.output.filename = 'static/js/[name].js'
      webpackConfig.output.chunkFilename = 'static/js/[name].chunk.js'
      webpackConfig.output.pathinfo = true
      webpackConfig.optimization.splitChunks = false
      webpackConfig.optimization.runtimeChunk = false
      webpackConfig.plugins = webpackConfig.plugins.map(plugin => {
        if (plugin.constructor.name === "HtmlWebpackPlugin") {
          plugin = new HtmlWebpackPlugin({
            inject: true,
            chunks: ['main'],
            template: 'public/index.html',
            minify: {
              removeComments: true,
              collapseWhitespace: true,
              removeRedundantAttributes: true,
              useShortDoctype: true,
              removeEmptyAttributes: true,
              removeStyleLinkTypeAttributes: true,
              keepClosingSlash: true,
              minifyJS: true,
              minifyCSS: true,
              minifyURLs: true,
            },
          })
        }
        // if (plugin.constructor.name === "MiniCssExtractPlugin") {
        //   plugin = new MiniCssExtractPlugin({
        //     filename: 'static/css/[name].css',
        //     chunkFilename: 'static/css/[name].chunk.css',
        //   })
        // }
        return plugin;
    });
      return webpackConfig
    }
  },

  style: {
    sass: {
      loaderOptions: {
        sassOptions: {
          includePaths: ['node_modules', 'src'],
        },
      },
    },
  },

  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: theme,
            javascriptEnabled: true,
          },
        },
      },
    },
  ],

}