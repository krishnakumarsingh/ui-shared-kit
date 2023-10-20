import { PaletteMode, colors, createTheme } from "@mui/material";
import theme from "../../../styles/theme";
const buttonGroupTheme = createTheme({
	...theme,
	shape: {
		borderRadius: 18,
	},
	components: {
		MuiButtonGroup: {
			defaultProps: {
				disableRipple: true,
				disableElevation: true,
			},
			styleOverrides: {
				root: {
					"& .MuiButtonBase-root": {
						borderRadius: 18,
					},
				},
			},
		},
	},
});
const darkTheme = createTheme({
	...buttonGroupTheme,
	palette: {
		mode: "dark",
		primary: {
			main: "rgba(51, 109, 166, 1)",
		},
	},
});
const getDesignTokens = (mode: PaletteMode) =>
	createTheme({
		...(mode === "light" ? buttonGroupTheme : darkTheme),
	});
export default buttonGroupTheme;
export { darkTheme, getDesignTokens };
