import js from '@eslint/js'
import svelte from 'eslint-plugin-svelte'

export default [
  js.configs.recommended,
  ...svelte.configs['flat/recommended'],
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        localStorage: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        console: 'readonly',
        URLSearchParams: 'readonly'
      }
    },
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'svelte/require-each-key': 'off',
      'svelte/prefer-svelte-reactivity': 'off',
      'svelte/no-immutable-reactive-statements': 'off'
    }
  },
  {
    ignores: ['dist/**', 'node_modules/**', '.vite/**', 'public/**']
  }
]
