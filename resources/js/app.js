import './bootstrap'
import '../css/app.css'

import { createInertiaApp } from '@inertiajs/svelte'
import { initFlowbite } from 'flowbite'

createInertiaApp({
	resolve: (name) => {
		const pages = import.meta.glob('./Pages/**/*.svelte', { eager: true })
		return pages[`./Pages/${name}.svelte`]
	},
	setup({ el, App, props }) {
		new App({ target: el, props })
	},
})
