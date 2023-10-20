import { ButtonProps } from "@mui/material";
export default interface Props extends ButtonProps {
	label?: string;
	textTransform?: string;
	children?: any;
}
