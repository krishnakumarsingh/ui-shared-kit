import { PaletteMode, createTheme } from "@mui/material";
import theme from "../../../styles/theme";

const baseTheme = createTheme({
	...theme,
	shape: {
		borderRadius: 0,
	},
	components: {
		MuiDivider: {
			styleOverrides: {},
		},
	},
});
const darkTheme = createTheme({
	...baseTheme,
	palette: {
		mode: "dark",
		primary: {
			main: "rgba(51, 109, 166, 1)",
		},
	},
});
const getDesignTokens = (mode: PaletteMode) =>
	createTheme({
		...(mode === "light" ? baseTheme : darkTheme),
	});
export default baseTheme;
export { darkTheme, getDesignTokens };
