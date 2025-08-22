import { defineConfig } from 'astro/config';

const isVercel = process.env.VERCEL === '1';

export default defineConfig({
  base: isVercel ? '/' : '/carol-lab/',
  outDir: 'docs',
});
