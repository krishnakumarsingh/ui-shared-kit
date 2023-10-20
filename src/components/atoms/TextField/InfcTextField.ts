export default interface Props {
	mode?: "light" | "dark";
	label: string,
	variant: "standard" | "outlined" | "filled",
	size?: "small" | "medium",
	disabled?: boolean
}
