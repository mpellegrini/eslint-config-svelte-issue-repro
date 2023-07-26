module.exports = {
  root: true,
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      plugins: ['svelte'],
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
  ],
}
