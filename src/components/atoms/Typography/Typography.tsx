import { Typography as MuiTypography, ThemeProvider } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { getDesignTokens } from "./theme";
import Props from "./InfcTypography";

const Typography = ({ mode = "light", ...props }: Props): JSX.Element => {
	return (
		<ThemeProvider theme={getDesignTokens(mode)}>
			<MuiTypography {...props} />
		</ThemeProvider>
	);
};

Typography.propTypes = {
	mode: PropTypes.any,
};

export default Typography;
