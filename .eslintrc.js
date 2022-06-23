module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    '@vue/airbnb',
    'plugin:vue/recommended',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'import/no-unresolved': 'off',
    'no-underscore-dangle': 'off',
    'import/extensions': 'off',
    'no-param-reassign': 'off',
    'vue/valid-v-slot': 'off',
    'vue/no-mutating-props': 'off',
    'linebreak-style': ['error', 'unix'],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
  },
};