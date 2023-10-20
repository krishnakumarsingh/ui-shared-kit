import { AvatarGroup as MuiAvatarGroup, Badge, ThemeProvider } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { getDesignTokens } from "./theme";
import Avatar from "../../atoms/Avatar";
import Props from "./InfcAvatarGroup";

const defaultAvatarList = [
	<Avatar badge={true} size="large" />,
	<Avatar badge={true} size="large" />,
	<Avatar badge={false} size="large" />,
	<Avatar badge={false} size="large" />,
	<Avatar badge={false} size="large" />,
];

const AvatarGroup = ({ mode = "light", children = defaultAvatarList, ...props }: Props): JSX.Element => {
	return (
		<ThemeProvider theme={getDesignTokens(mode)}>
			<MuiAvatarGroup {...props}>
				{children.map((item: any, index: any) => React.cloneElement(item, { key: index }))}
			</MuiAvatarGroup>
		</ThemeProvider>
	);
};

AvatarGroup.propTypes = {
	mode: PropTypes.any,
	children: PropTypes.any,
};

export default AvatarGroup;
