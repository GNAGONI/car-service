const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../.prettierrc'), 'utf8'));

module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'arrow-body-style': [2, 'as-needed'],
    'class-methods-use-this': 0,
    'comma-dangle': [2, 'always-multiline'],
    'import/extensions': 0,
    'import/imports-first': 0,
    'import/newline-after-import': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 0,
    'import/no-webpack-loader-syntax': 0,
    'import/prefer-default-export': 0,
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
  },
};
