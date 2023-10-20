import "@mui/material/styles";
declare module "@mui/material/Button" {
	interface ButtonPropsColorOverrides {
		inheritText: true;
		inheritWhite: true;
	}
}

declare module "@mui/material/IconButton" {
	interface IconButtonPropsColorOverrides {
		inheritText: true;
		inheritWhite: true;
	}
}
declare module "@mui/material/Radio" {
	interface RadioPropsSizeOverrides {
		large: true;
	}
}

declare module "@mui/material/InputLabel" {
	interface InputLabelPropsSizeOverrides {
		medium: true;
	}
}

declare module "@mui/material/Checkbox" {
	interface CheckboxPropsSizeOverrides {
		large: true;
	}
}

declare module "@mui/material/styles/createPalette" {
	export interface PaletteOptions {
		inheritText?: PaletteColorOptions;
		inheritWhite?: PaletteColorOptions;
	}

	export interface Palette {
		inheritText: SimplePaletteColorOptions & ColorPartial;
		inheritWhite: SimplePaletteColorOptions & ColorPartial;
	}
}

declare module "@mui/material/styles" {
	interface SimplePaletteColorOptions {
		hover?: string;
		selected?: string;
		focus?: string;
		focusVisible?: string;
		outlinedBorder?: string;
	}
}
