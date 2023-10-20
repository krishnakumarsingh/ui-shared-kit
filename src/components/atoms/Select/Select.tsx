import { Select as MuiSelect, FormControl, MenuItem, InputLabel, FormHelperText, ThemeProvider } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { getDesignTokens } from "./theme";
import Props from "./InfcSelect";

const Select = ({ mode = "light", ...props }: Props): JSX.Element => {
	return (
		<ThemeProvider theme={getDesignTokens(mode)}>
			<FormControl className={`MuiFormControl`} fullWidth={props?.fullWidth}>
				<InputLabel variant={props?.variant} size={props?.size}>
					{props?.label}
				</InputLabel>
				<MuiSelect {...props}>
					{props?.menuItems?.map((option: any, i: number) => (
						<MenuItem key={i} value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</MuiSelect>
				<FormHelperText>{props?.helperText}</FormHelperText>
			</FormControl>
		</ThemeProvider>
	);
};

Select.propTypes = {
	mode: PropTypes.any,
};

export default Select;
