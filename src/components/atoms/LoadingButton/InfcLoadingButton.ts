import { LoadingButtonProps } from "@mui/lab";

export default interface Props extends LoadingButtonProps {
	label: string;
	loadingPosition?: any;
	startIcon?: any;
	mode?: "light" | "dark";
}
