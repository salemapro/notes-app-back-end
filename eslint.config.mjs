import globals from 'globals';
import pluginJs from '@eslint/js';
// import daStyle from 'eslint-config-dicodingacademy';


export default [
  { 
    files: ['**/*.js'], 
    languageOptions: { 
      sourceType: 'commonjs',
      globals: globals.node 
    } 
  },
  { 
    languageOptions: { 
      globals: globals.browser 
    } 
  },
  pluginJs.configs.recommended,
];
