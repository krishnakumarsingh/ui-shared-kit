import React from "react";
import PropTypes from "prop-types";
import { FormControl, FormLabel, FormGroup as MuiFormGroup, FormHelperText, ThemeProvider } from "@mui/material";
import Checkbox from "../../atoms/Checkbox";
import Props from "./InfcFormGroup";
import { getDesignTokens } from "./theme";

const defaultRadioList = [
	<Checkbox label="One" size="small" />,
	<Checkbox label="two" size="small" />,
	<Checkbox label="three" size="small" />,
];

const FormGroup = ({
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
				<FormLabel id={`form-group-${label}`}>{label}</FormLabel>
				<MuiFormGroup aria-labelledby={`form-group-${label}`} {...props}>
					{children}
				</MuiFormGroup>
				<FormHelperText>{helperText}</FormHelperText>
			</FormControl>
		</ThemeProvider>
	);
};

FormGroup.propTypes = {
	children: PropTypes.any,
	helperText: PropTypes.any,
	mode: PropTypes.any,
	label: PropTypes.string,
	error: PropTypes.bool,
	disabled: PropTypes.bool,
};
export default FormGroup;
