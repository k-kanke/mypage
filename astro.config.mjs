// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://k-kanke.github.io/mypage/',
	base: import.meta.env.PROD ? '/mypage' : '/',
	output: 'static',
});
