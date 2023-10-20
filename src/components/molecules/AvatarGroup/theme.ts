import { PaletteMode, createTheme } from "@mui/material";
import theme from "../../../styles/theme";

const typographyTheme = createTheme({
	...theme,
	shape: {},
	components: {
		MuiBadge: {
			styleOverrides: {
				root: {
				},
			},
		},
	},
});
const darkTheme = createTheme({
	...typographyTheme,
	palette: {
		mode: "dark",
		primary: {
			main: "rgba(51, 109, 166, 1)",
		},
	},
});
const getDesignTokens = (mode: PaletteMode = "light") =>
	createTheme({
		...(mode === "light" ? typographyTheme : darkTheme),
	});
export default typographyTheme;
export { darkTheme, getDesignTokens };
