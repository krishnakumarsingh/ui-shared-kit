import SaveIcon from "@mui/icons-material/Save";
import { LoadingButton as MuiLoadingButton } from "@mui/lab";
import { ThemeProvider } from "@mui/material";
import type {} from "@mui/material/themeCssVarsAugmentation";
import PropTypes from "prop-types";
import React from "react";
import Props from "./InfcLoadingButton";
import { getDesignTokens } from "./theme";

const LoadingButton = ({
	label = "label",
	mode = "light",
	loadingPosition = "start",
	startIcon = <SaveIcon />,
	...props
}: Props): JSX.Element => {
	return (
		<ThemeProvider theme={getDesignTokens(mode)}>
			<MuiLoadingButton
				loading
				loadingPosition={loadingPosition}
				startIcon={startIcon}
				variant="outlined"
				{...props}
			>
				{label}
			</MuiLoadingButton>
		</ThemeProvider>
	);
};

LoadingButton.propTypes = {
	label: PropTypes.any,
	mode: PropTypes.any,
	loadingPosition: PropTypes.any,
	startIcon: PropTypes.any,
};
export default LoadingButton;
