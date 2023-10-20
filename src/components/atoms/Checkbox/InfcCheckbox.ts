import { CheckboxProps } from "@mui/material";

export default interface Props extends CheckboxProps {
    size?: 'medium' | 'small' | 'large',
	mode?: "light" | "dark";
	label?: string,
}
