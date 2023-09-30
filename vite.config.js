import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'
import path from 'path'

export default defineConfig({
	server: {
		hmr: {
			host: 'localhost',
		},
		watch: {
			usePolling: false,
		},
	},

	plugins: [
		laravel({
			input: ['resources/css/app.css', 'resources/js/app.js'],
			refresh: true,
		}),
		svelte({
			input: ['resources/js/**/*.svelte'],
			preprocess: sveltePreprocess({
				typescript: true,
				sass: true,
				postcss: true,
			}),
		}),
	],

	resolve: {
		alias: {
			'@Layouts': path.resolve(__dirname, './resources/js/Layouts/'),
			'@Components': path.resolve(
				__dirname,
				'./resources/js/Components/'
			),
		},
	},

	build: {
		rollupOptions: {
			external: ['$app/stores'],
		},
	},
})
