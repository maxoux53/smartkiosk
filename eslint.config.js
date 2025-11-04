import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import prettierConfig from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

export default defineConfig([
    eslint.configs.recommended,  // Config recommandée ESLint
    tseslint.configs.recommended,  // Config TypeScript
    prettierConfig,  // Désactive les règles de formatage conflictuelles avec Prettier
]);
