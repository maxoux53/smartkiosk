import eslint from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';
import { createRequire } from 'module';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';
import globals from 'globals';

const require = createRequire(import.meta.url);
const expoConfig = require('eslint-config-expo').flat;

export default defineConfig([
    globalIgnores([
        '**/node_modules/**',
        '**/ios/**',
        '**/android/**',
        '**/build/**',
        '**/dist/**',
        '**/.expo/**',
        '**/Pods/**',
        'database/**'
    ]),

    // Base
    eslint.configs.recommended,
    tseslint.configs.recommended,
    prettierConfig,

    // Backend (Express)
    {
        files: ['backend/**/*.{ts,js}'],
        languageOptions: {
        },
        rules: {
            '@typescript-eslint/no-unused-vars': 'warn',
        },
    },

    // Frontend Web (React)
    {
        files: ['frontend-web/**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser, // définit window, document, etc pour éviter les erreurs ESLint
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        extends: [
            reactHooks.configs['recommended-latest'],
            reactRefresh.configs.vite,
            reactX.configs['recommended-typescript'],
            reactDom.configs.recommended,
        ],
        rules: {
            'react-hooks/exhaustive-deps': 'warn',
            'react/jsx-no-target-blank': 'off',
            'react/no-unescaped-entities': 'off',
            'react/prop-types': 'off',
        },
    },

    // Frontend Mobile (React Native + Expo)
    {
        files: ['frontend-mobile/**/*.{ts,tsx}'],
        ...expoConfig,
        rules: {
            // Overrides spécifiques si besoin (e.g., pour React Native)
        },
    },
]);
