const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended',
  ],
  plugins: [],
  ignorePatterns: ['mocks', 'mock', 'dist/', 'build/', 'public/', '.scss', '.svg'],
  env: {
    jest: true,
    browser: true,
    es6: true,
  },
  globals: {
    window: true,
    document: true,
    localStorage: true,
    navigator: true,
  },
  rules: {
    'import/no-extraneous-dependencies': [OFF, { devDependencies: ['**/*.story.jsx', '**/*.stories.jsx'] }],
    'prettier/prettier': ERROR,
    'no-unused-vars': WARNING,
    'no-unused-expressions': [
      ERROR,
      {
        allowShortCircuit: true,
      },
    ],
    'no-console': OFF,
    'no-debugger': OFF,
    'no-alert': OFF,
    'no-use-before-define': OFF,
    'func-names': OFF,
    'react/jsx-filename-extension': [WARNING, { extensions: ['.js', '.jsx'] }],
    'no-nested-ternary': OFF,
    'import/no-cycle': OFF,
    'import/prefer-default-export': OFF,
    'react/react-in-jsx-scope': ERROR,
    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': 'warn',
    'react/button-has-type': WARNING,
    'react/jsx-pascal-case': ERROR,
    'react/require-default-props': OFF,
    'jsx-a11y/control-has-associated-label': OFF,
    'jsx-a11y/click-events-have-key-events': OFF,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
};
