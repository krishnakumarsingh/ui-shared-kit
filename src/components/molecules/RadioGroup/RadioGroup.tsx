import React from "react";
import PropTypes from "prop-types";
import { FormControl, FormLabel, RadioGroup as MuiRadioGroup, FormHelperText, ThemeProvider } from "@mui/material";
import Radio from "../../atoms/Radio";
import Props from "./InfcRadioGroup";
import { getDesignTokens } from "./theme";

const defaultRadioList = [
	<Radio label="One" size="small" />,
	<Radio label="two" size="small" />,
	<Radio label="three" size="small" />,
];

const RadioGroup = ({
	children = defaultRadioList,
	helperText,
	mode,
	label,
	error,
	disabled,
	...props
}: Props): JSX.Element => {
	return (
		<ThemeProvider theme={getDesignTokens(mode)}>
			<FormControl error={error} disabled={disabled}>
				<FormLabel id={`radio-group-${label}`}>{label}</FormLabel>
				<MuiRadioGroup aria-labelledby={`radio-group-${label}`} name="radio-buttons-group" {...props}>
					{children}
				</MuiRadioGroup>
				<FormHelperText>{helperText}</FormHelperText>
			</FormControl>
		</ThemeProvider>
	);
};

RadioGroup.propTypes = {
	children: PropTypes.any,
	helperText: PropTypes.any,
	mode: PropTypes.any,
	label: PropTypes.string,
	error: PropTypes.bool,
	disabled: PropTypes.bool,
};
export default RadioGroup;
