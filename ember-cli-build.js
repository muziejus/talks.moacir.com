'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  // app.import('node_modules/reveal.js/dist/reset.css');
  // app.import('node_modules/reveal.js/dist/reveal.css');

  const { Webpack } = require('@embroider/webpack');
  return require('@embroider/compat').compatBuild(app, Webpack, {
    // staticAddonTestSupportTrees: true,
    // staticAddonTrees: true,
    // staticHelpers: true,
    // staticModifiers: true,
    // staticComponents: true,
    // splitAtRoutes: [
    // ], // can also be a RegExp
    packagerOptions: {
      cssLoaderOptions: {
        sourceMap: process.env.EMBER_ENV !== 'production' ? true : false,
      },
      webpackConfig: {
        module: {
          rules: [
            {
              test: /\.(woff(2)?|ttf|jpg|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]',
                    outputPath: 'assets/fonts/',
                  },
                },
              ],
            },
            {
              test: (f) => /\.css$/i.test(f),
              exclude: /node_modules/,
              use: [
                {
                  loader: 'postcss-loader',
                  options: {
                    sourceMap:
                      process.env.EMBER_ENV !== 'production' ? true : false,
                    postcssOptions: {
                      config: './postcss.config.js',
                    },
                  },
                },
              ],
            },
          ],
        },
        resolve: {
          fallback: {
            stream: false,
            crypto: false,
            fs: false,
            path: false,
          },
        },
      },
    },
  });
};
