import { TextField as MuiTextField, ThemeProvider } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import Props from "./InfcTextField";
import { getDesignTokens } from "./theme";

const TextField = ({ mode = "light", ...props }: Props): JSX.Element => {
	return (
		<ThemeProvider theme={getDesignTokens(mode)}>
			<MuiTextField className={`MuiTextField`} {...props}></MuiTextField>
		</ThemeProvider>
	);
};

TextField.propTypes = {
	mode: PropTypes.any,
};

export default TextField;
