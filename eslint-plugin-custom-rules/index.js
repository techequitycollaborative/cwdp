module.exports = {
  plugins: ['custom-rules'],
  rules: {
    'emotion-jsx-import': require('./emotion-jsx-import'),
    'react/no-unknown-property': ['error', { ignore: ['css'] }]
  }
}
