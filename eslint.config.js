import typescript from '@typescript-eslint/eslint-plugin';
import svelte from 'eslint-plugin-svelte';
import tsParser from '@typescript-eslint/parser';
import svelteParser from 'svelte-eslint-parser';

export default [
  {
    files: ['**/*.svelte'],
    plugins: {
      svelte,
      '@typescript-eslint': typescript,
    },
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: tsParser,
      },
    },
    rules: {
      'svelte/comment-directive': [
        'error',
        {
          reportUnusedDisableDirectives: true,
        },
      ],
      'svelte/no-at-html-tags': 'error',
    },
  },
  {
    ignores: ['.svelte-kit'],
  },
];
