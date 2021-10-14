const Module = require('module');

// See workaround for supporting local eslint rules
// https://github.com/eslint/eslint/issues/8769#issue-237412073
Module._resolveFilename = (original => function(request) {
  if (request === 'eslint-plugin-custom-rules') {
    return require.resolve('./eslint-plugin-custom-rules');
  } else {
    return original.apply(this, arguments);
  }
})(Module._resolveFilename)

module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeature: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  ignorePatterns: ['eslint-plugin-custom-rules'],
  plugins: [
    '@emotion',
    'react',
    'jest',
    'custom-rules',
  ],
  rules: {
    'jest/no-disabled-tests': 'error',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'custom-rules/emotion-jsx-import': ['error', { runtime: 'automatic' }],
    '@emotion/syntax-preference': [2, 'object'],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off"
  },
};
