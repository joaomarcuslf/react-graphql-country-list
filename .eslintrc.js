module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jsx-a11y',
  ],
  rules: {
    'class-methods-use-this': 'off',
    'function-call-argument-newline': ['error', 'consistent'],
    'global-require': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    indent: [2, 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    'max-len': ['error', 120, 2, { ignoreComments: true }],
    'multiline-ternary': ['error', 'always-multiline'],
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
    'no-async-promise-executor': 'off',
    'no-console': 'off',
    'no-continue': 'off',
    'no-debugger': 'warn',
    'no-underscore-dangle': 'off',
    'object-property-newline': 'error',
    'prefer-promise-reject-errors': 'off',
    quotes: ['error', 'single'],
    radix: 'off',
    'react/destructuring-assignment': 'off',
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/no-access-state-in-setstate': 'off',
    'react/prefer-stateless-function': 'warn',
    'react/prop-types': 'off',
    'react/sort-comp': 'off',
    semi: ['error', 'always'],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'no-alert': 'off',
    'no-restricted-globals': 'off',
    'react/button-has-type': 'off',
  },
};
