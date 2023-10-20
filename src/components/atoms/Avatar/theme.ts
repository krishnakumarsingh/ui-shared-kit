import { PaletteMode, createTheme } from "@mui/material";
import theme from "../../../styles/theme";

const typographyTheme = createTheme({
	...theme,
	shape: {},
	components: {
		MuiBadge: {
			styleOverrides: {
				root: {
					"& .MuiBadge-badge": {
						backgroundColor: "#6E9A1C",
						color: "#6E9A1C",
						right: '4px',
						boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
						"&::after": {
							position: "absolute",
							top: 0,
							left: 0,
							width: "100%",
							height: "100%",
							borderRadius: "50%",
							content: '""',
						},
					},
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
