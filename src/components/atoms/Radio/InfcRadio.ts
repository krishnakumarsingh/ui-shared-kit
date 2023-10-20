import { RadioProps } from "@mui/material";

export default interface Props extends RadioProps {
    size?: 'medium' | 'small' | 'large',
	mode?: "light" | "dark";
	label?: string,
}
