import type { Meta, StoryObj } from "@storybook/react";
import { within } from "@storybook/testing-library";
import TextField from "./index";

const meta: Meta<typeof TextField> = {
	title: "Design System / Atoms / TextField",
	component: TextField,
	tags: ["autodocs"],
	argTypes: {
		label: {
			description: "The content of the component.",
			table: {
				defaultValue: { summary: "label" },
				type: { summary: "string" },
			},
		},
		variant: {
			options: ["standard", "outlined", "filled"],
			control: { type: "select" },
			description: `The variant to use.<br/>
                <b>Type:</b><code>'standard' | 'outlined' | 'filled' </code><br/>`,
			table: {
				defaultValue: { summary: "standard" },
				type: { summary: "string" },
			},
		},
		size: {
			options: ["medium", "small"],
			control: { type: "select" },
			description:
				"The size of the component. small is equivalent to the dense select styling. `medium`, `small` ",
			table: {
				defaultValue: { summary: "medium" },
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

export const Standard = {
	args: {
		label: "Label",
		size: "medium",
		variant: "standard",
		error: true,
	},
	parameters: {
		docs: {
			description: {
				story: "Showing a simple text field with default properties `standard`.",
			},
		},
	},
	play: ({ canvasElement, step }: any) => {
		const canvas = within(canvasElement);
		step("Check Label", async () => {
			await canvas.getByLabelText("Label");
		});
	},
};

export const Outlined = {
	args: {
		label: "Label",
		size: "medium",
		variant: "outlined",
	},
	parameters: {
		docs: {
			description: {
				story: "Showing a simple text field with default properties `outlined`.",
			},
		},
	},
};
export const Filled = {
	args: {
		label: "Label",
		size: "medium",
		variant: "filled",
	},
	parameters: {
		docs: {
			description: {
				story: "Showing a simple text field with default properties `filled`.",
			},
		},
	},
};