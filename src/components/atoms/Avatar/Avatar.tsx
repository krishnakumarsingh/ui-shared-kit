import { Avatar as MuiAvatar, Badge, ThemeProvider } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { getDesignTokens } from "./theme";
import Props from "./InfcAvatar";

const Avatar = ({ mode = "light", badge, size, variant = "circular", ...props }: Props): JSX.Element => {
	let sizeProp, badgeSizeProp;
	if (size === "small") {
		sizeProp = { sx: { width: 24, height: 24, fontSize: 12 } };
		badgeSizeProp = { sx: { "& .MuiBadge-badge": { height: 5, minWidth: 5 } } };
	} else if (size === "medium") {
		sizeProp = { sx: { width: 32, height: 32, fontSize: 14 } };
	} else if (size === "large") {
		sizeProp = { sx: { width: 40, height: 40, fontSize: 20 } };
	} else {
		sizeProp = { size };
	}

	return (
		<ThemeProvider theme={getDesignTokens(mode)}>
			{badge ? (
				<Badge
					overlap="circular"
					className={`MuiBadge`}
					variant="dot"
					{...badgeSizeProp}
					anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
				>
					<MuiAvatar variant={variant} {...sizeProp} {...props} />
				</Badge>
			) : (
				<MuiAvatar variant={variant} {...sizeProp} {...props} />
			)}
		</ThemeProvider>
	);
};

Avatar.propTypes = {
	mode: PropTypes.any,
};

export default Avatar;
