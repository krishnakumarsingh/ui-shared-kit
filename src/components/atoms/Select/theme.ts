import { PaletteMode, createTheme } from "@mui/material";
import theme from "../../../styles/theme";

const baseTheme = createTheme({
	...theme,
	shape: {
		borderRadius: 12,
	},
	components: {
		MuiFormControl: {
			styleOverrides: {
				root: {
					"& .MuiInput-underline:before": {
						borderBottomColor: "#1E21246B",
					},
					"& .MuiInput-underline:hover:not(.Mui-disabled):before": {
						borderBottomColor: "#1E2124",
					},
					"& .MuiInput-underline:after": {
						borderBottomColor: "#004990",
					},
					"& .MuiInput-underline.Mui-error:before": {
						borderBottom: "2px solid #B7000E",
					},
					"& .MuiOutlinedInput-root": {
						"&:hover:before fieldset": {
							borderColor: "#1E2124",
						},
						"&.Mui-focused fieldset": {
							borderColor: "#004990",
						},
						"&.Mui-error fieldset": {
							borderColor: "#B7000E",
						},
					},
					"& .MuiFilledInput-underline:after": {
						borderBottomColor: "#004990",
					},
					"& .MuiFilledInput-underline:before": {
						borderBottomColor: "#1E2124",
					},
					"& .MuiFilledInput-underline.Mui-error:before": {
						borderBottom: "2px solid #B7000E",
					},
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
