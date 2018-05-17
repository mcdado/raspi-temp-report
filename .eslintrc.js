module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: 'module',
  },
  rules: {
    'arrow-parens': ['warn', 'always'],
    'arrow-body-style': ['warn', 'as-needed'],
    'comma-dangle': [
      'warn',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    curly: ['error', 'all'],
    indent: 'warn',
    'max-len': [
      'warn',
      {
        code: 120,
        comments: 120,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'padded-blocks': ['warn', {
      blocks: 'never',
      classes: 'always',
      switches: 'never',
    }],
    'prefer-const': 'warn',
    'prefer-destructuring': 'warn',
    'prefer-template': 'warn',
    quotes: ['warn', 'single', { avoidEscape: true }],
    radix: ['warn', 'as-needed'],
    'space-before-function-paren': ['warn', 'always'],
  },
};
