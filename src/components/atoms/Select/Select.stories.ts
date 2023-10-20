import type { Meta, StoryObj } from "@storybook/react";
import { within } from "@storybook/testing-library";
import Select from "./Select";

const dummyData = [
	{
		label: "Menu Item",
		value: "Menu Item",
	},
	{
		label: "Menu Item 1",
		value: "Menu Item 1",
	},
];

const meta: Meta<typeof Select> = {
	title: "Design System / Atoms / Select",
	component: Select,
	parameters: {
		docs: {
			description: {
				component:
					"Showing a simple select with default properties `standard`, `outlined`, `filled`.",
			},
		},
	},
	tags: ["autodocs"],
    argTypes: {
		label: {
			description:
				"The content of the component.",
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
			options: [ "medium", "small"],
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
		menuItems: dummyData,
		variant: "standard",
        fullWidth: true,
	},
	parameters: {
		docs: {
			description: {
				story: "Showing a simple select with default properties `standard`.",
			},
		},
	},
	play: ({ canvasElement, step }: any) => {
		const canvas = within(canvasElement);
		step("Check Label", async () => {
			await canvas.getByText("Label");
		});
	},
};

export const Outlined = {
	args: {
		label: "Label",
		size: "medium",
		menuItems: dummyData,
		variant: "outlined",
        fullWidth: true,
	},
	parameters: {
		docs: {
			description: {
				story: "Showing a simple select with default properties `standard`.",
			},
		},
	},
};

export const Filled = {
	args: {
		label: "Label",
		size: "medium",
		menuItems: dummyData,
		variant: "filled",
        fullWidth: true,
	},
	parameters: {
		docs: {
			description: {
				story: "Showing a simple select with default properties `standard`.",
			},
		},
	},
};
