export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		expanded: true,
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

export const globalTypes = {
	scheme: {
		name: "Scheme",
		description: "Select light or dark theme",
		defaultValue: "light",
		toolbar: {
			title: "Theme",
			icon: "mirror",
			items: ["light", "dark", "system"],
			dynamicTitle: true
		}
	}
}
