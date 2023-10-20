import type { Meta, StoryObj } from '@storybook/react';
import FormGroup from './index';

const meta: Meta<typeof FormGroup> = {
	title: "Design System / Molecules / FormGroup",
	component: FormGroup,
	parameters: {
		docs: {
			description: {
				component:
					"Showing a simple FormGroup with default properties.",
			},
		},
	},
	tags: ["autodocs"],
	argTypes: {
		label: {
			description:
				"The label of the FormGroup.",
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
type Story = StoryObj<typeof FormGroup>;

export const Default: Story = {
	args: {
		label: "Label",
		helperText: "Helper text",
	},
	parameters: {
		docs: {
			description: {
				story: "Showing a simple standalone FormGroup with default properties",
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
				story: "Showing a FormGroup  with disabled property",
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
				story: "Showing a FormGroup with error true properties",
			},
		},
	},
};
