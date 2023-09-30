/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./resources/js/**/*.svelte',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
	],
	plugins: [require('flowbite/plugin')],
	darkMode: 'class',
	theme: {
		extend: {},
	},
	plugins: [],
}
