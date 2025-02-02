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
			animation: {
				'fade-in': 'fadeIn 0.5s ease-out forwards',
			  },
			  keyframes: {
				fadeIn: {
				  '0%': { opacity: '0', transform: 'translateY(20px)' },
				  '100%': { opacity: '1', transform: 'translateY(0)' },
				},
			},
		},
	},
	plugins: [],
}