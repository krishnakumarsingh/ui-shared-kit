import React from "react";
import PropTypes from "prop-types";
import { Radio as MuiRadio, FormControlLabel, ThemeProvider } from "@mui/material";
import Props from "./InfcRadio";
import { getDesignTokens } from "./theme";

const Radio = ({ size, mode, label, ...props }: Props): JSX.Element => {
	let sizeProp;
	if (size === "large") {
		sizeProp = { sx: { "& .MuiSvgIcon-root": { fontSize: 28 } } };
	} else {
		sizeProp = { size };
	}
	return (
		<ThemeProvider theme={getDesignTokens(mode)}>
			{label ? (
				<FormControlLabel
					value={label.toLowerCase()}
					control={<MuiRadio {...sizeProp} {...props}></MuiRadio>}
					label={label}
				/>
			) : (
				<MuiRadio {...sizeProp} {...props}></MuiRadio>
			)}
		</ThemeProvider>
	);
};

Radio.propTypes = {
	size: PropTypes.any,
	mode: PropTypes.any,
	label: PropTypes.string,
};
export default Radio;
