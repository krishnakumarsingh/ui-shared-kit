import type { Meta, StoryObj } from "@storybook/react";
import { fireEvent, within } from "@storybook/testing-library";
import Radio from "./index";

const meta: Meta<typeof Radio> = {
	title: "Design System / Atoms / Radio",
	component: Radio,
	parameters: {
		docs: {
			description: {
				component: "Showing a simple Radio with default properties.",
			},
		},
	},
	tags: ["autodocs"],
	argTypes: {
		label: {
			description: "The label of the Radio.",
			table: {
				defaultValue: { summary: "label" },
				type: { summary: "string" },
			},
		},
		size: {
			options: ["small", "medium", "large"],
			control: { type: "radio" },
			description:
				"The size of the component. small is equivalent to the dense button styling.  `medium`, `small` ",
			table: {
				defaultValue: { summary: "small" },
				type: { summary: "string" },
			},
		},
		color: {
			options: ["primary", "secondary", "error", "warning", "info", "success", "default"],
			control: { type: "select" },
			description: "The color of the component. It supports both default and custom theme colors.",
			table: {
				defaultValue: { summary: "primary" },
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

export const Standalone: Story = {
	args: {
		size: "small",
		color: "primary",
	},
	parameters: {
		docs: {
			description: {
				story: "Showing a simple standalone Radio with default properties",
			},
		},
	},
	play: async ({ canvasElement, step }: any) => {
		const canvas = within(canvasElement);
		await step("Check Role", async () => {
			await fireEvent.click(canvas.getByRole("radio"));
		});
	},
};

export const WithLabel: Story = {
	args: {
		label: "Label",
		size: "small",
		color: "primary",
	},
	parameters: {
		docs: {
			description: {
				story: "Showing a Radio input with Label with default properties",
			},
		},
	},
	play: async ({ canvasElement, step }: any) => {
		const canvas = within(canvasElement);
		await step("Check Role", async () => {
			await fireEvent.click(canvas.getByRole("radio"));
		});
		await step("Check Label", async () => {
			await canvas.getByLabelText("Label");
		});
	},
};
