import type { Meta, StoryObj } from '@storybook/react';
import { fireEvent, within } from "@storybook/testing-library";
import Checkbox from './index';

const meta: Meta<typeof Checkbox> = {
	title: "Design System / Atoms / Checkbox",
	component: Checkbox,
	parameters: {
		docs: {
			description: {
				component:
					"Showing a simple Checkbox with default properties.",
			},
		},
	},
	tags: ["autodocs"],
	argTypes: {
		label: {
			description:
				"The label of the Checkbox.",
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
				story: "Showing a simple standalone Checkbox with default properties",
			},
		},
	},
	play: async ({ canvasElement, step }: any) => {
		const canvas = within(canvasElement);
		await step("Check Role", async () => {
			await fireEvent.click(canvas.getByRole("checkbox"));
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
				story: "Showing a Checkbox input with Label with default properties",
			},
		},
	},
	play: async ({ canvasElement, step }: any) => {
		const canvas = within(canvasElement);
		await step("Check Role", async () => {
			await fireEvent.click(canvas.getByRole("checkbox"));
		});
		await step("Check Label", async () => {
			await canvas.getByLabelText("Label");
		});
	},
};

