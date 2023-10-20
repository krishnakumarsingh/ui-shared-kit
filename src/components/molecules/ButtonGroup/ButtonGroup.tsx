import { ButtonGroup as MuiButtonGroup, ThemeProvider } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import Button from "../../atoms/Button";
import Props from "./InfcButtonGroup";
import { getDesignTokens } from "./theme";
import SaveIcon from "@mui/icons-material/Save";
import IconButton from "../../atoms/IconButton";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const defaultButtonList = [
	<Button label="One" />,
	<Button size="small">
		<ArrowDropDownIcon />
	</Button>,
];
const ButtonGroup = ({ children = defaultButtonList, mode = "light", ...props }: Props): JSX.Element => {
	return (
		<ThemeProvider theme={getDesignTokens(mode)}>
			<MuiButtonGroup {...props}>
				{children.map((item: any, index: any) => React.cloneElement(item, { key: index }))}
			</MuiButtonGroup>
		</ThemeProvider>
	);
};

ButtonGroup.propTypes = {
	children: PropTypes.any,
	mode: PropTypes.any,
};
export default ButtonGroup;
