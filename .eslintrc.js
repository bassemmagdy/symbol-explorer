module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'curly': ['error', 'multi-or-nest'],
    'no-useless-escape': 'off',
    'no-var': 'error',
    'space-before-function-paren': ['error', {
      'anonymous': 'always',
      'named': 'never',
      'asyncArrow': 'always'
    }],
    'indent': ['error', 2]
  },
  globals: {
    'PEERS_API': true,
    'ENDPOINTS': true
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
