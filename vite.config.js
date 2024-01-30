// vite.config.js
import { defineConfig } from 'vite';
import postcss from 'rollup-plugin-postcss';

export default defineConfig({
  // other configurations...
  plugins: [
    postcss(),
    // other plugins...
  ],
});

