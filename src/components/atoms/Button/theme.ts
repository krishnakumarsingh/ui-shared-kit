import { createTheme } from "@mui/material";
import theme from "../../../styles/theme";
const themeScheme = createTheme({
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
export default themeScheme;
