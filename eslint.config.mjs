import { fixupPluginRules } from '@eslint/compat';
import js from '@eslint/js';
import json from '@eslint/json';
import { defineConfig, globalIgnores } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import youDontNeedLodashUnderscore from 'eslint-plugin-you-dont-need-lodash-underscore';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  { files: ['src/**/*.json'], plugins: { json }, language: 'json/json', extends: ['json/recommended'] },
  {
    files: ['**/*.{js,mjs,ts}'],
    extends: ['js/recommended', importPlugin.flatConfigs.recommended, importPlugin.flatConfigs.typescript],
    plugins: {
      js,
      '@typescript-eslint': tseslint.plugin,
      'simple-import-sort': simpleImportSort,
      'you-dont-need-lodash-underscore': fixupPluginRules(youDontNeedLodashUnderscore),
    },
    languageOptions: {
      globals: { ...globals.node, ...globals.jest },
      parser: tseslint.parser,
      ecmaVersion: 2022,
    },
    rules: {
      'no-unused-vars': 'off',
      'import/no-named-as-default': 0,
      'import/no-cycle': 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'import/no-named-as-default-member': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
      ],
      'you-dont-need-lodash-underscore/omit': 'warn',
      'you-dont-need-lodash-underscore/get': 'error',
      'you-dont-need-lodash-underscore/uniq': 'off',
      'prefer-template': 'warn',
      indent: 'off',
      quotes: 'off',
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts, .js'],
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
        node: {
          extensions: ['.js', '.ts'],
        },
      },
    },
  },
  globalIgnores([
    '**/.DS_Store',
    '**/.env',
    '**/.gitmodules',
    '**/.idea',
    '**/.rest',
    '**/.vscode',
    '**/.zed',
    '**/*.log',
    '*wiki*/',
    'data/',
    'docs/',
    '**/build',
    '**/coverage',
    '**/dist',
    '**/node_modules',
    '**/src_ts',
    '**/__codegen__/**/*',
  ]),
]);
