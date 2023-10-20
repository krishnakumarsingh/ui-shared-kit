import { FormGroupProps } from "@mui/material";

export default interface Props extends FormGroupProps {
    children?: any[],
	helperText?: string,
	mode?: "light" | "dark";
	label?: string,
	error?: boolean,
	disabled?: boolean,
}
