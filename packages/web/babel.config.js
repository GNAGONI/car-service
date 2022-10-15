module.exports = {
  presets: [
    'next/babel',
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        modules: false,
        corejs: 2,
        useBuiltIns: 'usage',
      },
    ],
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-optional-chaining',
    [
      'module-resolver',
      {
        alias: {
          components: './components',
          constants: './constants',
          containers: './containers',
          lib: './lib',
          modules: './modules',
          static: './static',
          webSpecificRedux: './webSpecificRedux',
          server: './server',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: [
        'transform-react-remove-prop-types',
        '@babel/plugin-transform-react-inline-elements',
        '@babel/plugin-transform-react-constant-elements',
      ],
    },
    test: {
      plugins: ['dynamic-import-node'],
    },
  },
};
