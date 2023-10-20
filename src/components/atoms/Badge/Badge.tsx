import { Badge as MuiBadge, ThemeProvider } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { getDesignTokens } from "./theme";
import Props from "./InfcBadge";

const Badge = ({ mode = "light", ...props }: Props): JSX.Element => {
	return (
		<ThemeProvider theme={getDesignTokens(mode)}>
			<MuiBadge {...props} />
		</ThemeProvider>
	);
};

Badge.propTypes = {
	mode: PropTypes.any,
};

export default Badge;
