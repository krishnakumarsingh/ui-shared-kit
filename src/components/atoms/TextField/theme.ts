import { PaletteMode, createTheme } from "@mui/material";
import theme from "../../../styles/theme";

const baseTheme = createTheme({
	...theme,
	shape: {
		borderRadius: 12,
	},
	components: {
		MuiTextField: {
			styleOverrides: {
				root: {
					"*::-webkit-scrollbar": {
						width: "7px",
					},
					"*::-webkit-scrollbar-track": {
						"-webkit-box-shadow": "1px 0px 0px 0px #E7E7E7 inset",
					},
					"*::-webkit-scrollbar-thumb": {
						backgroundColor: "#B6BDC3",
						borderRadius: "4px",
					},
					"& .MuiFormLabel-root.Mui-error": {
						color: "#57616B",
					},
					"& .MuiInput-underline.Mui-error:before": {
						borderBottomColor: "#B7000E",
					},
					"& .MuiInput-underline:before": {
						borderBottomColor: "#1E2124",
					},
					"& .MuiInput-underline:after": {
						borderBottomColor: "#004990",
					},
					"& .MuiInput-underline:hover:before": {
						borderBottomColor: "#1E2124",
					},
					"& .MuiOutlinedInput-root": {
						"&:hover fieldset": {
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
						borderBottomColor: "#B7000E",
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
