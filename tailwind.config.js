/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{ts,tsx,jsx,js}", "./app/*.tsx"],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
};
