import { PaletteMode, colors, createTheme } from "@mui/material";
import theme from "../../../styles/theme";
const buttonTheme = createTheme({
	...theme,
	shape: {
		borderRadius: 72,
	},
	components: {
		MuiButton: {
			defaultProps: {
				disableRipple: true,
				disableElevation: true,
			},
			styleOverrides: {
				root: {
					"&.MuiButton-lowercase": {
						"text-transform": "lowercase",
					},
					"&.MuiButton-uppercase": {
						"text-transform": "uppercase",
					},
					"&.MuiButton-capitalize": {
						"text-transform": "capitalize",
					},
				},
			},
		},
	},
});
const darkTheme = createTheme({
	...buttonTheme,
	palette: {
		mode: "dark",
		primary: {
			main: "rgba(51, 109, 166, 1)",
		},
	},
});
const getDesignTokens = (mode: PaletteMode) =>
	createTheme({
		...(mode === "light" ? buttonTheme : darkTheme),
	});
export default buttonTheme;
export { darkTheme, getDesignTokens };
