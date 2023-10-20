export default interface Props {
	mode?: "light" | "dark";
	size?: "small" | "medium" | "large",
    orientation?: "horizontal" | "vertical",
    children?: any,
    disabled?: boolean
}
