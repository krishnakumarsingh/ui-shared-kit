
export default interface Props {
	mode?: "light" | "dark";
	title: string,
	placement: 'bottom-end' | 'bottom-start' | 'bottom' | 'left-end' | 'left-start' | 'left' | 'right-end' | 'right-start' | 'right' | 'top-end' | 'top-start' | 'top',
	children?: any,
}
