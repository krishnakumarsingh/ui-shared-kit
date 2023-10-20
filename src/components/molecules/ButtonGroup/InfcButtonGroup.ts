import { ButtonGroupProps } from "@mui/material";

export default interface Props extends ButtonGroupProps {
	children?: any[];
	mode?: "light" | "dark";
}
