import type { Meta, StoryObj } from "@storybook/react";
import { within, fireEvent } from "@storybook/testing-library";
import ToggleButton from "./index";

const meta: Meta<typeof ToggleButton> = {
	title: "Design System / Atoms / ToggleButton",
	component: ToggleButton,
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
		selected: {
			options: ["enabled", "disabled"],
			control: { type: "boolean" },
			description: "If true, the component is selected.",
			table: {
				defaultValue: { summary: "enabled" },
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
			await fireEvent.click(canvas.getByRole("button"));
		});
	},
};
