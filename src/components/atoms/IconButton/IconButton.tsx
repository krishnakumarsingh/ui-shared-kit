import { IconButton as MuiIconButton, ThemeProvider } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import Icons from "../Icons";
import Props from "./InfcIconButton";
import { getDesignTokens } from "./theme";
import { Awake } from "@carbon/icons-react";

const IconButton = ({
	children = <Icons component={Awake} />,
	color,
	mode = "light",
	...props
}: Props): JSX.Element => {
	return (
		<ThemeProvider theme={getDesignTokens(mode)}>
			<MuiIconButton color={color} {...props}>
				{React.cloneElement(children, { color: color, size: props.size })}
			</MuiIconButton>
		</ThemeProvider>
	);
};

IconButton.propTypes = {
	children: PropTypes.any,
	mode: PropTypes.any,
};
export default IconButton;
