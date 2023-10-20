import { RadioGroupProps } from "@mui/material";

export default interface Props extends RadioGroupProps {
    children?: any[],
	helperText?: string,
	mode?: "light" | "dark";
	label?: string,
	error?: boolean,
	disabled?: boolean,
}
