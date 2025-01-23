/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				'xs': '350px',
				'c400': '400px',
				'c450': '450px',
				'c500': '500px',
				'c550': '550px',
				'c1400': '1400px',
			},
		},
	},
	plugins: [],
}