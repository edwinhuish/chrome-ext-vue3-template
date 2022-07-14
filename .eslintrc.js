module.exports = {
  root: true,
  globals: {
    Vue: true,
    chrome: true,
    document: true,
    window: true,
  },
  env: {
    browser: true,
    es2015: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/prettier',
    // eslint-config-prettier 的缩写
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-unused-vars': ['error', { vars: 'all', args: 'none', ignoreRestSiblings: false }], // 未使用变量约束
    'comma-dangle': ['warn', 'only-multiline'], // 末端逗号
    'arrow-parens': ['error', 'as-needed'], // 箭头函数，参数括号
  },
  overrides: [
    {
      files: ['*.html'], // 避免html出现不是根目录的错误
      processor: 'vue/.vue',
    },
  ],
}
