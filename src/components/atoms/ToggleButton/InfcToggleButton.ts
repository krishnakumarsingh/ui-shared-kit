export default interface Props {
	mode?: "light" | "dark";
	size?: "small" | "medium" | "large",
    value: any,
    children: any,
	disabled?: boolean,
    selected?: boolean
}
