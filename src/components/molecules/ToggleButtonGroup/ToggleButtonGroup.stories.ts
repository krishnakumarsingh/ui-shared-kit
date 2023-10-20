import type { Meta, StoryObj, } from "@storybook/react";
import { within, fireEvent } from "@storybook/testing-library";
import ToggleButtonGroup from "./index";

const meta: Meta<typeof ToggleButtonGroup> = {
	title: "Design System / Molecules / ToggleButtonGroup",
	component: ToggleButtonGroup,
	tags: ["autodocs"],
	argTypes: {
		size: {
			options: ["small", "medium", "large"],
			control: { type: "select" },
			description:
				"The size of the component. small is equivalent to the dense select styling. `small`, `medium`, `large` ",
			table: {
				defaultValue: { summary: "medium" },
				type: { summary: "string" },
			},
		},
		orientation: {
			options: ["horizontal" , "vertical"],
			control: { type: "select" },
			description:
				"The component orientation (layout flow direction). `horizontal`, `vertical`",
			table: {
				defaultValue: { summary: "horizontal" },
				type: { summary: "string" },
			},
		},
		disabled: {
			options: ["enabled", "disabled"],
			control: { type: "boolean" },
			description: "If true, the component is disabled.",
			table: {
				defaultValue: { summary: "enabled" },
				type: { summary: "string" },
			},
		},
	},
};
export default meta;
type Story = StoryObj<typeof meta>;


export const Example = {
	args: {
		size: "medium",
	},
	parameters: {
		docs: {
			description: {
				story: "Showing a simple toggle button with default properties.",
			},
		},
	},
	play: async ({ canvasElement, step }: any) => {
		const canvas = within(canvasElement);
		await step("Check Role", async () => {
			await fireEvent.click(canvas.getByRole("group"));
		});
	},
};
