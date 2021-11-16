module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				storjBlue: "#0149FF",
				aware: "#FFEBC5",
				darkBlue: "#091C45"
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: [require("@tailwindcss/forms")]
};
