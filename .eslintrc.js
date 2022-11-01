module.exports = {
  env: {
    es6: true,
    browser: true,
    es2021: true,
    node: true
  },
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/prop-types': 'off',
    'react/jsx-max-props-per-line': ['error', { maximum: 1 }],
    'react/forbid-component-props': 'off',
    'no-irregular-whitespace': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-await-in-loop': 'error',
    'no-alert': 'error',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-template-curly-in-string': 'error',
    'no-multi-str': 'error',
    'no-new-wrappers': 'error',
    'no-caller': 'error',
    'default-case': 'error',
    curly: ['error', 'all'],
    'dot-location': ['error', 'property'],
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'dot-notation': ['error'],
    'no-eval': 'error',
    'max-classes-per-file': ['error', 1],
    'no-extend-native': 'error',
    'no-implied-eval': 'error',
    'no-extra-label': 'error',
    'no-new-func': 'error',
    'no-return-assign': 'error',
    'no-proto': 'error',
    'no-sequences': 'error',
    'no-extra-bind': 'error',
    'no-implicit-globals': 'error',
    'no-implicit-coercion': 'error',
    'no-lone-blocks': 'error',
    'no-iterator': 'error',
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],
    'no-loop-func': 'error',
    'no-new': 'error',
    'no-script-url': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-vars': 'error',
    'no-throw-literal': 'error',
    'no-useless-return': 'error',
    'no-useless-call': 'error',
    'require-await': 'error',
    'comma-style': 'error',
    'comma-spacing': ['error', { before: false, after: true }],
    'eol-last': 'error',
    'computed-property-spacing': 'error',
    'function-paren-newline': ['error', 'multiline'],
    'func-call-spacing': 'error',
    indent: ['error', 2, { SwitchCase: 1 }],
    'implicit-arrow-linebreak': 'error',
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'jsx-quotes': 'error',
    'max-depth': ['error', 4],
    'no-void': 'error',
    'no-use-before-define': 'error',
    yoda: ['error', 'never', { exceptRange: true }],
    'array-bracket-newline': ['error', 'consistent'],
    'array-bracket-spacing': 'error',
    'array-element-newline': ['error', 'consistent'],
    'brace-style': 'error',
    'block-spacing': 'error',
    'comma-dangle': ['error', 'never'],
    camelcase: 'warn',
    'line-comment-position': 'off',
    'max-lines': ['error', 2000],
    'max-statements-per-line': 'error',
    'max-nested-callbacks': ['error', 4],
    'multiline-ternary': ['error', 'always-multiline'],
    'max-len': ['warn', {
      code: 120,
      tabWidth: 2,
      ignoreComments: false,
      ignoreTrailingComments: false,
      ignoreUrls: true,
      ignorePattern: '^\\s*<.*>$'
    }],
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 3 }],
    'new-parens': 'error',
    'no-floating-decimal': 'error',
    'no-trailing-spaces': ['error', { ignoreComments: true }],
    'object-curly-newline': ['error', { multiline: true, consistent: true }],
    'no-whitespace-before-property': 'error',
    'no-lonely-if': 'error',
    'no-inline-comments': 'off',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-multi-assign': 'error',
    'no-tabs': 'error',
    'no-nested-ternary': 'off',
    'no-unneeded-ternary': 'error',
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    'object-curly-spacing': ['error', 'always'],
    'operator-linebreak': ['error', 'before'],
    'space-in-parens': ['error', 'never'],
    'spaced-comment': ['error', 'always'],
    'prefer-numeric-literals': 'error',
    'prefer-destructuring': ['error', { object: true, array: false }],
    'prefer-spread': 'error',
    'prefer-rest-params': 'error',
    'rest-spread-spacing': 'error',
    'prefer-template': 'error',
    'one-var': ['error', 'never'],
    'prefer-object-spread': 'error',
    'padded-blocks': ['error', 'never'],
    quotes: ['error', 'single', { avoidEscape: true }],
    'quote-props': ['error', 'as-needed'],
    'semi-style': ['error', 'last'],
    semi: ['error', 'never'],
    'space-before-function-paren': ['error', 'never'],
    'space-before-blocks': 'error',
    'space-infix-ops': 'error',
    'template-curly-spacing': 'error',
    'no-useless-rename': 'error',
    'no-useless-constructor': 'warn',
    'object-shorthand': ['error', 'always', { avoidQuotes: true }],
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-arrow-callback': 'error',
    'space-unary-ops': ['error', { words: true, nonwords: false }],
    'template-tag-spacing': ['error', 'always'],
    'switch-colon-spacing': 'error',
    'arrow-parens': 'error',
    'wrap-regex': 'error',
    'no-confusing-arrow': 'error',
    'arrow-spacing': 'error',
    'no-useless-computed-key': 'error',
    'no-duplicate-imports': 'error'
  }
}
