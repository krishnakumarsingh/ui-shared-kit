import { PaletteMode, createTheme } from "@mui/material";
import theme from "../../../styles/theme";
const buttonTheme = createTheme({
	...theme,
	shape: {
	},
	components: {
		MuiFormControl: {
			styleOverrides: {
				root: {
					"& .MuiFormGroup-root": {
						paddingLeft: "9px",
					},
					"& .MuiFormHelperText-root": {
						marginLeft: "0",
					}
				}
			}
		}
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
const getDesignTokens = (mode: PaletteMode = "light") =>
	createTheme({
		...(mode === "light" ? buttonTheme : darkTheme),
	});
export default buttonTheme;
export { darkTheme, getDesignTokens };
