import { PaletteMode, createTheme } from "@mui/material";
import theme from "../../../styles/theme";

const baseTheme = createTheme({
	...theme,
    shape: {
		borderRadius: 100,
	},
	components: {
		MuiToggleButtonGroup: {
			styleOverrides: {
				root: {
                      '& .MuiToggleButtonGroup-grouped': {
                        "&.MuiToggleButton-root": {
                            border: '1px solid #1E21241F',
                        },
                          '&:is(:first-of-type)': {
                            borderTopLeftRadius: 100,
                            borderBottomLeftRadius: 100,
                          },
                          '&:is(:last-of-type)': {
                            borderTopRightRadius: 100,
                            borderBottomRightRadius: 100,
                          }, 
                      },
					  '& .MuiToggleButtonGroup-groupedVertical': {
						'&:is(:first-of-type)': {
							borderTopLeftRadius: 100,
							borderTopRightRadius: 100,
							borderBottomLeftRadius: 0,
						  },
						  '&:is(:last-of-type)': {
							borderBottomLeftRadius: 100,
							borderBottomRightRadius: 100,
							borderTopRightRadius: 0
						  },
					  }    
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
