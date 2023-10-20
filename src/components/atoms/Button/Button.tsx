import { Button as MuiButton, ThemeProvider } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import Props from "./InfcButton";
import themeScheme from "./theme";

const Button = ({ textTransform = "capitalize", children, label, ...props }: Props): JSX.Element => {
	return (
		<ThemeProvider theme={themeScheme}>
			<MuiButton className={`MuiButton-${textTransform}`} {...props}>
				{children || label}
			</MuiButton>
		</ThemeProvider>
	);
};

Button.propTypes = {
	textTransform: PropTypes.string,
	label: PropTypes.any,
};
export default Button;
