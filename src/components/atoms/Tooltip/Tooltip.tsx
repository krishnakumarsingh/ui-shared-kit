import { Tooltip as MuiTooltip, ThemeProvider } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { getDesignTokens } from "./theme";
import Props from "./InfcTooltip";

const Tooltip = ({ mode = "light", children, ...props }: Props): JSX.Element => {
	return (
		<ThemeProvider theme={getDesignTokens(mode)}>
			<MuiTooltip className={`MuiTooltip`} {...props}>
				{children}
			</MuiTooltip>
		</ThemeProvider>
	);
};

Tooltip.propTypes = {
	mode: PropTypes.any,
	children: PropTypes.any,
};

export default Tooltip;
