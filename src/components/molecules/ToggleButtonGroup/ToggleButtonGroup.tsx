import React from "react";
import PropTypes from "prop-types";
import { ToggleButtonGroup as MuiToggleButtonGroup, ThemeProvider } from "@mui/material";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ToggleButton from "../../atoms/ToggleButton";
import Props from "./InfcToggleButtonGroup";
import { getDesignTokens } from "./theme";

const defaultToggleButtonList = [
	<ToggleButton value="left">
		<FormatAlignLeftIcon />
	</ToggleButton>,
	<ToggleButton value="center">
		<FormatAlignCenterIcon />
	</ToggleButton>,
	<ToggleButton value="right">
		<FormatAlignRightIcon />
	</ToggleButton>,
	<ToggleButton value="justify">
		<FormatAlignJustifyIcon />
	</ToggleButton>,
];

const ToggleButtonGroup = ({ children = defaultToggleButtonList, mode = "light", ...props }: Props): JSX.Element => {
	return (
		<ThemeProvider theme={getDesignTokens(mode)}>
			<MuiToggleButtonGroup className={`MuiToggleButtonGroup`} {...props}>
				{children.map((item: any, index: any) => React.cloneElement(item, { key: index }))}
			</MuiToggleButtonGroup>
		</ThemeProvider>
	);
};

ToggleButtonGroup.propTypes = {
	children: PropTypes.any,
	size: PropTypes.any,
	mode: PropTypes.any,
};
export default ToggleButtonGroup;
