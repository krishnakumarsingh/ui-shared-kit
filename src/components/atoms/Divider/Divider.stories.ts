import type { Meta, StoryObj } from "@storybook/react";
import Divider from "./index";


const meta: Meta<typeof Divider> = {
	title: "Design System / Atoms / Divider",
	component: Divider,
	parameters: {
		docs: {
			description: {
				component:
					"Showing a simple divider with default properties.",
			},
		},
	},
	tags: ["autodocs"],
	argTypes: {
		orientation: {
			options: [ 'horizontal' , 'vertical'],
			control: { type: "select" },
			description:
				"The component orientation.",
			table: {
				defaultValue: { summary: "horizontal" },
				type: { summary: "string" },
			},
		},
	},
	};

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
	args: {
		style: {height: '50px'}
	},
};

