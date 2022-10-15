const { parsed: localEnv } = require('dotenv').config({ path: '../../.env' });
const optimizedImages = require('next-optimized-images');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules');
const webpack = require('webpack');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const optimizedImagesConfig = {
  mozjpeg: {
    quality: 50,
  },
};

const nextConfiguration = {
  useFileSystemPublicRoutes: false,
  webpack: (config, { isServer }) => {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));

    if (isServer) {
      return config;
    }

    const isProduction = config.mode === 'production';

    if (!isProduction) {
      return config;
    }

    config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));

    return config;
  },
};

const pluginTranspileModulesConfiguration = {
  transpileModules: ['@car-service/redux', '@car-service/common', '@car-service/api-client'],
};

module.exports = withPlugins(
  [
    withSass,
    withCSS,
    [withFonts],
    [withTM, pluginTranspileModulesConfiguration],
    [optimizedImages, optimizedImagesConfig],
  ],
  nextConfiguration,
);
