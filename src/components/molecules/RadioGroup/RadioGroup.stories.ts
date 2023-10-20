import type { Meta, StoryObj } from '@storybook/react';
import RadioGroup from './index';

const meta: Meta<typeof RadioGroup> = {
	title: "Design System / Molecules / RadioGroup",
	component: RadioGroup,
	parameters: {
		docs: {
			description: {
				component:
					"Showing a simple RadioGroup with default properties.",
			},
		},
	},
	tags: ["autodocs"],
	argTypes: {
		label: {
			description:
				"The label of the RadioGroup.",
			table: {
				defaultValue: { summary: "label" },
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
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
	args: {
		label: "Label",
		helperText: "Helper text",
	},
	parameters: {
		docs: {
			description: {
				story: "Showing a simple standalone RadioGroup with default properties",
			},
		},
	},
};

export const DisabledGroup: Story = {
	args: {
		label: "Label",
		helperText: "Helper text",
		disabled: true,
	},
	parameters: {
		docs: {
			description: {
				story: "Showing a RadioGroup  with disabled property",
			},
		},
	},
};

export const WithError: Story = {
	args: {
		label: "Label",
		helperText: "Helper text",
		error: true,
	},
	parameters: {
		docs: {
			description: {
				story: "Showing a RadioGroup with error true properties",
			},
		},
	},
};
