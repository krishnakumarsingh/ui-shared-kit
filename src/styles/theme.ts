import { createTheme } from "@mui/material";
import * as color from "./variables/color";
import * as colorDark from "./variables/color-dark";
import * as space from "./variables/spacing";

export const theme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: color.ColorPrimaryMain,
			dark: color.ColorPrimaryDark,
			light: color.ColorPrimaryLight,
			contrastText: color.ColorPrimaryContrast,
			hover: color.ColorPrimaryHover,
			selected: color.ColorPrimarySelected,
			focus: color.ColorPrimaryFocus,
			focusVisible: color.ColorPrimaryFocusVisible,
			outlinedBorder: color.ColorPrimaryOutlinedBorder,
		},
		secondary: {
			main: color.ColorSecondaryMain,
			dark: color.ColorSecondaryDark,
			light: color.ColorSecondaryLight,
			contrastText: color.ColorSecondaryContrast,
			hover: color.ColorSecondaryHover,
			selected: color.ColorSecondarySelected,
			focus: color.ColorSecondaryFocus,
			focusVisible: color.ColorSecondaryFocusVisible,
			outlinedBorder: color.ColorSecondaryOutlinedBorder,
		},
		error: {
			main: color.ColorErrorMain,
			dark: color.ColorErrorDark,
			light: color.ColorErrorLight,
			contrastText: color.ColorErrorContrast,
		},
		warning: {
			main: color.ColorWarningMain,
			dark: color.ColorWarningDark,
			light: color.ColorWarningLight,
			contrastText: color.ColorWarningContrast,
		},
		info: {
			main: color.ColorInfoMain,
			dark: color.ColorInfoDark,
			light: color.ColorInfoLight,
			contrastText: color.ColorInfoContrast,
		},
		success: {
			main: color.ColorSuccessMain,
			dark: color.ColorSuccessDark,
			light: color.ColorSuccessLight,
			contrastText: color.ColorSuccessContrast,
		},
		inheritText: {
			main: "#E3E7ED",
			dark: "#F3F7FC",
			light: "#E3E7ED",
			contrastText: "#1E2124",
		},
		inheritWhite: {
			main: "#E3E7ED",
			dark: "#E0E0E0",
			light: "#E0E0E0",
			contrastText: "#FFF",
		},
		text: {
			primary: color.ColorTextPrimary,
			secondary: color.ColorTextSecondary,
			disabled: color.ColorTextDisabled,
		},
		background: {
			default: "#FFFFFF",
			paper: "#FFFFFF",
			// paperElevation0: "rgba(255, 255, 255, 1)",
			// paperElevation2: "rgba(255, 255, 255, 1)",
			// paperElevation16: "rgba(255, 255, 255, 1)",
			// paperElevation24: "rgba(255, 255, 255, 1)",
		},
		divider: "#1E21241F",
	},
	shape: {
		borderRadius: 72,
	},
	typography: {
		fontFamily: `'Source Sans 3'`,
		h1: {
			fontSize: "96px",
			fontWeight: 400,
			color: "#1E2124",
			lineHeight: "112.032px",
			fontStyle: "normal",
			letterSpacing: "-1.5px",
		},
		h2: {
			fontSize: "60px",
			fontWeight: 400,
			color: "#1E2124",
			lineHeight: "72px",
			fontStyle: "normal",
			letterSpacing: "-0.5px",
		},
		h3: {
			fontSize: "48px",
			fontWeight: 400,
			color: "#1E2124",
			lineHeight: "56.016px",
			fontStyle: "normal",
			letterSpacing: "-0.3px",
		},
		h4: {
			fontSize: "34px",
			fontWeight: 400,
			color: "#1E2124",
			lineHeight: "41.99px",
			fontStyle: "normal",
			letterSpacing: "-0.25px",
		},
		h5: {
			fontSize: "24px",
			fontWeight: 500,
			color: "#1E2124",
			lineHeight: "32.016px",
			fontStyle: "normal",
		},
		h6: {
			fontSize: "20px",
			fontWeight: 500,
			color: "#1E2124",
			lineHeight: "32px",
			fontStyle: "normal",
			letterSpacing: "0.15px",
		},
		caption: {
			fontSize: "12px",
			fontWeight: 400,
			color: "#1E2124",
			lineHeight: "19.92px",
			fontStyle: "normal",
			letterSpacing: "0.2px",
		},
		overline: {
			fontSize: "12px",
			fontWeight: 500,
			color: "#1E2124",
			lineHeight: "31.92px",
			fontStyle: "normal",
			letterSpacing: "0.5px",
			textTransform: "uppercase"
		},
		subtitle1: {
			fontSize: "16px",
			fontWeight: 500,
			color: "#1E2124",
			lineHeight: "28px",
			fontStyle: "normal",
			letterSpacing: "0.15px",
		},
		subtitle2: {
			fontSize: "14px",
			fontWeight: 500,
			color: "#1E2124",
			lineHeight: "21.98px",
			fontStyle: "normal",
			letterSpacing: "0.1px",
		},
		body1: {
			fontSize: "16px",
			fontWeight: 400,
			color: "#1E2124",
			lineHeight: "24px",
			fontStyle: "normal",
		},
		body2: {
			fontSize: "14px",
			fontWeight: 400,
			color: "#1E2124",
			lineHeight: "20.02px",
			fontStyle: "normal",
			letterSpacing: "0.15px",
		},
		button: {
			fontSize: "14px",
			fontWeight: 500,
			fontStyle: "normal",
		}
	},
	// divider: "#1E21241F"
});

const darkTheme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: colorDark.ColorPrimaryMain,
			dark: colorDark.ColorPrimaryDark,
			light: colorDark.ColorPrimaryLight,
			contrastText: colorDark.ColorPrimaryContrast,
			hover: colorDark.ColorPrimaryHover,
			selected: colorDark.ColorPrimarySelected,
			focus: colorDark.ColorPrimaryFocus,
			focusVisible: colorDark.ColorPrimaryFocusVisible,
			outlinedBorder: colorDark.ColorPrimaryOutlinedBorder,
		},
		secondary: {
			main: colorDark.ColorSecondaryMain,
			dark: colorDark.ColorSecondaryDark,
			light: colorDark.ColorSecondaryLight,
			contrastText: colorDark.ColorSecondaryContrast,
			hover: colorDark.ColorSecondaryHover,
			selected: colorDark.ColorSecondarySelected,
			focus: colorDark.ColorSecondaryFocus,
			focusVisible: colorDark.ColorSecondaryFocusVisible,
			outlinedBorder: colorDark.ColorSecondaryOutlinedBorder,
		},
		error: {
			main: colorDark.ColorErrorMain,
			dark: colorDark.ColorErrorDark,
			light: colorDark.ColorErrorLight,
			contrastText: colorDark.ColorErrorContrast,
		},
		warning: {
			main: colorDark.ColorWarningMain,
			dark: colorDark.ColorWarningDark,
			light: colorDark.ColorWarningLight,
			contrastText: colorDark.ColorWarningContrast,
		},
		info: {
			main: colorDark.ColorInfoMain,
			dark: colorDark.ColorInfoDark,
			light: colorDark.ColorInfoLight,
			contrastText: colorDark.ColorInfoContrast,
		},
		success: {
			main: colorDark.ColorSuccessMain,
			dark: colorDark.ColorSuccessDark,
			light: colorDark.ColorSuccessLight,
			contrastText: colorDark.ColorSuccessContrast,
		},
		inheritText: {
			main: "#E3E7ED",
			dark: "#F3F7FC",
			light: "#E3E7ED",
			contrastText: "#1E2124",
		},
		inheritWhite: {
			main: "#F3F7FC",
			dark: "#E0E0E0",
			light: "#E0E0E0",
			contrastText: "#FFF",
		},
		text: {
			primary: "rgba(30, 33, 36, 1)",
			secondary: "rgba(87, 97, 107, 1)",
			disabled: "rgba(106, 117, 129, 1)",
		},
		background: {
			default: "rgba(255, 255, 255, 1)",
			paper: "rgba(255, 255, 255, 1)",
			// paperElevation0: "rgba(255, 255, 255, 1)",
			// paperElevation2: "rgba(255, 255, 255, 1)",
			// paperElevation16: "rgba(255, 255, 255, 1)",
			// paperElevation24: "rgba(255, 255, 255, 1)",
		},
	},
});
let themeScheme = () => theme;
if (
	(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) ||
	(window?.location?.search?.split("?")[1]?.split("&")?.find(i => i.includes("globals"))?.split(":")[1] === "dark")
) {
	// dark mode
	themeScheme = () => darkTheme;
}
export default themeScheme();
