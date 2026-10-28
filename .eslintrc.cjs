module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2022: true
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: 'espree'
      },
      extends: ['plugin:svelte/recommended']
    }
  ],
  ignorePatterns: ['dist', 'node_modules', '.vite', 'vite.config.js', 'svelte.config.js']
}
