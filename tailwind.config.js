module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			height: {
				700: "700px",
				600: "600px",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
