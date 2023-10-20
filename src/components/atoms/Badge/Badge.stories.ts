import type { Meta, StoryObj } from "@storybook/react";
import { within } from "@storybook/testing-library";
import Badge from "./index";

const meta: Meta<typeof Badge> = {
	title: "Design System / Atoms / Badge",
	component: Badge,
	parameters: {
		docs: {
			description: {
				component:
					"Showing a simple badge with default properties.",
			},
		},
	},
	tags: ["autodocs"],
	argTypes: {
		color: {
			options: [ 'default' , 'primary' , 'secondary' , 'error' , 'info' , 'success' , 'warning'],
			control: { type: "select" },
			description:
				"The color of the component. `default`, `primary`,`secondary`, `error`, `info`, `success`, `warning`",
			table: {
				defaultValue: { summary: "default" },
				type: { summary: "string" },
			},
		},
		variant: {
			options: ["dot", "standard"],
			control: { type: "select" },
			description:
				"The variant of the component.  `dot`, `standard`",
			table: {
				defaultValue: { summary: "standard" },
				type: { summary: "string" },
			},
		},
	},
	};

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
	args: {
		badgeContent: 4,
		color: 'success',
		showZero: true,
		variant: 'standard'
	},
	play:  ({ canvasElement, step }: any) => {
		const canvas = within(canvasElement);
		 step("Check Label", async () => {
			await canvas.getByText(4);
		});
	},
};

