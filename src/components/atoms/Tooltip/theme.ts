import { PaletteMode, createTheme } from "@mui/material";
import theme from "../../../styles/theme";

const baseTheme = createTheme({
	...theme,
	shape: {
		borderRadius: 0,
	},
	components: {
		MuiTooltip: {
			styleOverrides: {
				tooltip: {
					fontFamily: `'Source Sans 3'`,
					backgroundColor: "#1E2124EB",
					borderRadius: "6px",
				},
				arrow: {
					color: "#1E2124EB"
				  },
			},
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
