import { Divider as MuiDivider, ThemeProvider } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { getDesignTokens } from "./theme";
import Props from "./InfcDivider";

const Divider = ({ mode = "light", children, ...props }: Props): JSX.Element => {
	return (
		<ThemeProvider theme={getDesignTokens(mode)}>
			<MuiDivider {...props}>{children}</MuiDivider>
		</ThemeProvider>
	);
};

Divider.propTypes = {
	mode: PropTypes.any,
	children: PropTypes.any,
};

export default Divider;
