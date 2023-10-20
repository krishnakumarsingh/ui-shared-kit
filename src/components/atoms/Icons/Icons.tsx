import { StarFilled } from "@carbon/icons-react";
import { ThemeProvider } from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";
import PropTypes from "prop-types";
import React from "react";
import Props from "./InfcIcons";
import { getDesignTokens } from "./theme";

const Icons = ({
	mode = "light",
	color = "primary",
	component = StarFilled,
	viewBox = "-4 -4 24 24",
	...props
}: Props): JSX.Element => {
	let iconsSize = 16;
	switch (props.size) {
		case "large":
			iconsSize = 32;
			break;
		case "medium":
			iconsSize = 24;
			break;
		case "small":
			iconsSize = 16;
			break;
		default:
			iconsSize = 16;
			break;
	}
	return (
		<ThemeProvider theme={getDesignTokens(mode)}>
			<SvgIcon
				width={iconsSize}
				height={iconsSize}
				fontSize={props.size}
				inheritViewBox={true}
				component={component}
				{...props}
			/>
		</ThemeProvider>
	);
};

Icons.propTypes = {
	color: PropTypes.string,
	opacity: PropTypes.string,
	mode: PropTypes.string,
};

export default Icons;
