/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'hero-image': "url('/icons/hero-image.svg')",
				'gallery-image-01': "url('/images/gallery01.png')",
			},
			boxShadow: {
				'3xl':
					'0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px -1px rgba(16, 24, 40, 0.1)',
			},
			colors: {
				neutral01: '#141414',
				neutral02: '#808080',
				neutral03: '#F9FAFB',
			},
		},
	},
	plugins: [],
};
