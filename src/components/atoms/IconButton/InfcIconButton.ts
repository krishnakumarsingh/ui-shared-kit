import { IconButtonProps } from "@mui/material";
export default interface Props extends IconButtonProps {
	children?: any;
	mode?: "light" | "dark";
}
