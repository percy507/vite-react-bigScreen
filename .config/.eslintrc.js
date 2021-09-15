module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier', // Make sure this is always the last element in the array.
  ],
  plugins: ['simple-import-sort', 'react-hooks', '@typescript-eslint'],
  rules: {
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    // 默认开启 exhaustive-deps, 对于某些确实不需要该规则的场景, 可使用面的注释关闭该规则
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // eslint-disable-line react-hooks/exhaustive-deps
    'react-hooks/exhaustive-deps': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/consistent-type-imports': ['error'],
  },
};
