import React from "react";
import PropTypes from "prop-types";
import { Checkbox as MuiCheckbox, FormControlLabel, ThemeProvider } from "@mui/material";
import Props from "./InfcCheckbox";
import themeScheme from "./theme";

const Checkbox = ({ size, mode, label, ...props }: Props): JSX.Element => {
	let sizeProp;
	if (size === "large") {
		sizeProp = { sx: { "& .MuiSvgIcon-root": { fontSize: 28 } } };
	} else {
		sizeProp = { size };
	}
	return (
		<ThemeProvider theme={themeScheme}>
			{label ? (
				<FormControlLabel
					value={label.toLowerCase()}
					control={<MuiCheckbox {...sizeProp} {...props}></MuiCheckbox>}
					label={label}
				/>
			) : (
				<MuiCheckbox {...sizeProp} {...props}></MuiCheckbox>
			)}
		</ThemeProvider>
	);
};

Checkbox.propTypes = {
	size: PropTypes.any,
	mode: PropTypes.any,
	label: PropTypes.string,
};
export default Checkbox;
