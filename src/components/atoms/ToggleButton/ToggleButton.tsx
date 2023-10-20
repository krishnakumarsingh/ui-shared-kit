import { ToggleButton as MuiToggleButton, ThemeProvider } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import Props from "./InfcToggleButton";
import { getDesignTokens } from "./theme";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";

const ToggleButton = ({ mode = "light", children = <FormatAlignLeftIcon />, ...props }: Props): JSX.Element => {
	return (
		<ThemeProvider theme={getDesignTokens(mode)}>
			<MuiToggleButton className={`MuiToggleButton`} {...props}>
				{children}
			</MuiToggleButton>
		</ThemeProvider>
	);
};

ToggleButton.propTypes = {
	mode: PropTypes.any,
	size: PropTypes.any,
	children: PropTypes.any,
};

export default ToggleButton;
