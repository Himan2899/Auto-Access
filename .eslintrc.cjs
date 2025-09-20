module.exports = {
  root: true,
  env: { 
    browser: true, 
    es2020: true,
    webextensions: true,
    node: true
  },
  extends: [
    'eslint:recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules', '*.config.js', '*.config.ts', 'test/**/*'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  globals: {
    'chrome': 'readonly',
    'NodeJS': 'readonly',
    'SpeechSynthesisVoice': 'readonly',
    'EventListener': 'readonly'
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'prefer-const': 'error',
    'no-var': 'error',
    'no-console': 'off',
    'no-unused-vars': 'warn',
    'no-undef': 'error',
    'no-case-declarations': 'off',
    'no-cond-assign': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
